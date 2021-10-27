import { DBCadastrarProduto } from "../../../data/usecases"
import { CadastrarProduto } from "../../../domain/usecases"
import { ProdutoMysqlRepositorio } from "../../../infra/db/knex/repositorio"

export const makeCadastrarProduto = (): CadastrarProduto => {
    const produtoMysqlRepositorio = new ProdutoMysqlRepositorio()
    return new DBCadastrarProduto(produtoMysqlRepositorio)
}