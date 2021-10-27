import { ListarCompras } from "../../domain/usecases/listar-compras"
import { CompraModel } from "../../domain/models"
import { ListarComprasRepositorio } from "../protocols"

export class DBListarCompras implements ListarCompras {
    constructor (
        private readonly listarComprasRepositorio: ListarComprasRepositorio
    ) {}

    async lista (): Promise<CompraModel[]> {
        const result = this.listarComprasRepositorio.lista()
        return result
    }
}