import { DBListarProdutos } from "../../../data/usecases"
import { ListarProdutos } from "../../../domain/usecases"
import { ProdutoMysqlRepositorio } from "../../../infra/db/knex/repositorio"

export const makeListarProdutos = (): ListarProdutos => {
    const produtoMysqlRepositorio = new ProdutoMysqlRepositorio()
    return new DBListarProdutos(produtoMysqlRepositorio)
}