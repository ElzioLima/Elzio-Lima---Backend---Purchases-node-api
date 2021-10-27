import { DeletarCompra } from "../../domain/usecases"
import { DeletarCompraRepositorio } from "../protocols"

export class DBDeletarCompra implements DeletarCompra {
    constructor (
        private readonly deletarCompraRepositorio: DeletarCompraRepositorio
    ) {}

    async deleta (id: number): Promise<boolean> {
        const result = this.deletarCompraRepositorio.deleta(id)
        return result
    }
}