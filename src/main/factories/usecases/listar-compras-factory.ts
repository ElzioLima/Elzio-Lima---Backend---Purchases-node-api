import { DBListarCompras } from "../../../data/usecases"
import { ListarCompras } from "../../../domain/usecases"
import { CompraMysqlRepositorio } from "../../../infra/db/knex/repositorio"

export const makeListarCompras = (): ListarCompras => {
    const compraMysqlRepositorio = new CompraMysqlRepositorio()
    return new DBListarCompras(compraMysqlRepositorio)
}