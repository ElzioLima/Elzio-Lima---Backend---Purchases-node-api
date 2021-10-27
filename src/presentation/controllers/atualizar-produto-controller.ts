import { AtualizarProduto } from "../../domain/usecases"
import { ok, serverError } from "../helpers"
import { Controller } from "../protocols/controller"
import { HttpResponse } from "../protocols/http"

export class AtualizarProdutoController implements Controller {
    constructor (
        private readonly atualizarProduto: AtualizarProduto,
    ) {}

    async handle (request: any): Promise<HttpResponse> {
        try {
            const [id, nome, descricao, preco ] = request
            const result = await this.atualizarProduto.atualiza({
                id,
                nome,
                descricao,
                preco
            })
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}