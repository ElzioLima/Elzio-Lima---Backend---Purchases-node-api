import { DBDeletarProduto } from "../../../data/usecases"
import { DeletarProduto } from "../../../domain/usecases"
import { ProdutoMysqlRepositorio } from "../../../infra/db/knex/repositorio"

export const makeDeletarProduto = (): DeletarProduto => {
    const produtoMysqlRepositorio = new ProdutoMysqlRepositorio()
    return new DBDeletarProduto(produtoMysqlRepositorio)
}