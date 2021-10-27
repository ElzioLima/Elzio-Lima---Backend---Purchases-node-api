import { DBAtualizarProduto } from "../../../data/usecases"
import { AtualizarProduto } from "../../../domain/usecases"
import { ProdutoMysqlRepositorio } from "../../../infra/db/knex/repositorio"

export const makeAtualizaProduto = (): AtualizarProduto => {
    const produtoMysqlRepositorio = new ProdutoMysqlRepositorio()
    return new DBAtualizarProduto(produtoMysqlRepositorio)
}