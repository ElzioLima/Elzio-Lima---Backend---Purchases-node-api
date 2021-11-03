import { DeletarCompra } from "../../domain/usecases"
import { DeletarCompraRepositorio } from "../protocols"

export class DBDeletarCompra implements DeletarCompra {
    constructor (
        private readonly deletarCompraRepositorio: DeletarCompraRepositorio
    ) {}

    async deleta (data: number): Promise<boolean> {
        const result = await this.deletarCompraRepositorio.deleta(data)
        return result
    }
}