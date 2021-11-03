import { CadastrarProduto } from "../../domain/usecases"
import { ok, badRequest, serverError } from "../helpers"
import { Validation } from "../protocols"
import { Controller } from "../protocols/controller"
import { HttpResponse } from "../protocols/http"

export class CadastrarProdutoController implements Controller {
    constructor (
        private readonly cadastrarProduto: CadastrarProduto,
        private readonly validation: Validation
    ) {}

    async handle (request: any): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request)
            if (error) {
                return badRequest(error)
            }
            const { nome, descricao, preco } = request
            const result = await this.cadastrarProduto.cadastra({
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