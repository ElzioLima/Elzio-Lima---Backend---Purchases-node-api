import { KnexHelper } from "../../infra/db"
import { AtualizarProduto } from "../../domain/usecases"
import { AtualizarProdutoRepositorio } from "../protocols/db/produto/atualizar-produto-repositorio"

export class DBAtualizarProduto implements AtualizarProduto {
    constructor (
        private readonly atualizarProdutoRepositorio: AtualizarProdutoRepositorio
    ) {}

    async atualiza (data: any): Promise<boolean> {
        const [ nome, descricao, preco ] = data
        const data_criacao = KnexHelper.getDateNow()
        const data_atualizacao = KnexHelper.getDateNow()
        const produto = {
            nome,
            descricao,
            preco,
            data_criacao,
            data_atualizacao
        }
        const result = this.atualizarProdutoRepositorio.atualiza(produto)
        return result
    }
}