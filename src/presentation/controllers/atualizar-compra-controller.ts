import { AtualizarCompra } from "../../domain/usecases"
import { ok, serverError } from "../helpers"
import { Controller } from "../protocols/controller"
import { HttpResponse } from "../protocols/http"

export class AtualizarCompraController implements Controller {
    constructor (
        private readonly atualizarCompra: AtualizarCompra,
    ) {}

    async handle (request: any): Promise<HttpResponse> {
        try {
            const { id, tipo_pagamento, status, produtos } = request
            const result = await this.atualizarCompra.atualiza({
                id,
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