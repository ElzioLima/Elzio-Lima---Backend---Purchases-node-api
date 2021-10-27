import { DBCadastrarCompra } from "../../../data/usecases"
import { CadastrarCompra } from "../../../domain/usecases"
import { CompraMysqlRepositorio } from "../../../infra/db/knex/repositorio"

export const makeCadastrarCompra = (): CadastrarCompra => {
    const compraMysqlRepositorio = new CompraMysqlRepositorio()
    return new DBCadastrarCompra(compraMysqlRepositorio)
}