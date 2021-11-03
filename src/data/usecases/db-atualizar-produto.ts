import { KnexHelper } from "../../infra/db"
import { AtualizarProduto } from "../../domain/usecases"
import { AtualizarProdutoRepositorio } from "../protocols/db/produto/atualizar-produto-repositorio"

export class DBAtualizarProduto implements AtualizarProduto {
    constructor (
        private readonly atualizarProdutoRepositorio: AtualizarProdutoRepositorio
    ) {}

    async atualiza (data: any): Promise<boolean> {
        const { id, nome, descricao, preco } = data
        const data_atualizacao = KnexHelper.getDateNow()
        const produto = {
            nome,
            descricao,
            preco,
            data_atualizacao
        }
        const result = await this.atualizarProdutoRepositorio.atualiza(produto, id)
        return result
    }
}