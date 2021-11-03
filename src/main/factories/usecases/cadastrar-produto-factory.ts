import { DBCadastrarProduto } from "../../../data/usecases"
import { ProdutoMysqlRepositorio } from "../../../infra/db/knex/repositorio"

export const makeCadastrarProduto = (): DBCadastrarProduto => {
    const produtoMysqlRepositorio = new ProdutoMysqlRepositorio()
    return new DBCadastrarProduto(produtoMysqlRepositorio)
}