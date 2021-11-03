import { AtualizarCompra } from "../../domain/usecases"
import { AtualizarCompraRepositorio } from "../protocols"

export class DBAtualizarCompra implements AtualizarCompra {
    constructor (
        private readonly atualizarCompraRepositorio: AtualizarCompraRepositorio
    ) {}

    async atualiza (data: any): Promise<boolean> {
        const { id, tipo_pagamento, status, produtos } = data
        const compra = {
            tipo_pagamento,
            status
        }
        const result = await this.atualizarCompraRepositorio.atualiza(compra, produtos, id)
        return result
    }
}