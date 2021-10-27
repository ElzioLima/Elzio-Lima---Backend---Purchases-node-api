import { DBAtualizarCompra } from "../../../data/usecases"
import { AtualizarCompra } from "../../../domain/usecases"
import { CompraMysqlRepositorio } from "../../../infra/db/knex/repositorio"

export const makeAtualizarCompra = (): AtualizarCompra => {
    const compraMysqlRepositorio = new CompraMysqlRepositorio()
    return new DBAtualizarCompra(compraMysqlRepositorio)
}