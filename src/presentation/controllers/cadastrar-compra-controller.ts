import { CadastrarCompra } from "../../domain/usecases"
import { ok, badRequest, serverError } from "../helpers"
import { Validation } from "../protocols"
import { Controller } from "../protocols/controller"
import { HttpResponse } from "../protocols/http"

export class CadastrarCompraController implements Controller {
    constructor (
        private readonly cadastrarCompra: CadastrarCompra,
        private readonly validation: Validation
    ) {}

    async handle (request: any): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request)
            if (error) {
                return badRequest(error)
            }
            const [ tipo_pagamento, status, produtos ] = request
            const result = await this.cadastrarCompra.cadastra({
                tipo_pagamento,
                status,
                produtos
            })
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}