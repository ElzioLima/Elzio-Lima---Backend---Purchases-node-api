import { DeletarCompra } from "../../domain/usecases"
import { ok, badRequest, serverError } from "../helpers"
import { Validation } from "../protocols"
import { Controller } from "../protocols/controller"
import { HttpResponse } from "../protocols/http"

export class DeletarCompraController implements Controller {
    constructor (
        private readonly deletarCompra: DeletarCompra,
        private readonly validation: Validation
    ) {}

    async handle (request: any): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request)
            if (error) {
                return badRequest(error)
            }
            const [id] = request
            const result = await this.deletarCompra.deleta(id)
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}