import { DeletarProduto } from "../../domain/usecases"
import { ok, badRequest, serverError } from "../helpers"
import { Validation } from "../protocols"
import { Controller } from "../protocols/controller"
import { HttpResponse } from "../protocols/http"

export class DeletarProdutoController implements Controller {
    constructor (
        private readonly deletarProduto: DeletarProduto,
        private readonly validation: Validation
    ) {}

    async handle (request: any): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request)
            if (error) {
                return badRequest(error)
            }
            const { id } = request
            const result = await this.deletarProduto.deleta(id)
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}