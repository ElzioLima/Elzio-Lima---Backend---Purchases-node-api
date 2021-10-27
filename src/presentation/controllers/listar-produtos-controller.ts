import { ListarProdutos } from "../../domain/usecases"
import { ok, serverError } from "../helpers"
import { Controller } from "../protocols/controller"
import { HttpResponse } from "../protocols/http"

export class ListarProdutosController implements Controller {
    constructor (
        private readonly listarProdutos: ListarProdutos,
    ) {}

    async handle (): Promise<HttpResponse> {
        try {
            const result = await this.listarProdutos.lista()
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}