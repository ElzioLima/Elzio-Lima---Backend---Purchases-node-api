import { DBDeletarCompra } from "../../../data/usecases"
import { DeletarCompra } from "../../../domain/usecases"
import { CompraMysqlRepositorio } from "../../../infra/db/knex/repositorio"

export const makeDeletarCompra = (): DeletarCompra => {
    const compraMysqlRepositorio = new CompraMysqlRepositorio()
    return new DBDeletarCompra(compraMysqlRepositorio)
}