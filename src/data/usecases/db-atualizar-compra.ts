import { KnexHelper } from "../../infra/db"
import { AtualizarCompra } from "../../domain/usecases"
import { AtualizarCompraRepositorio } from "../protocols"

export class DBAtualizarCompra implements AtualizarCompra {
    constructor (
        private readonly atualizarCompraRepositorio: AtualizarCompraRepositorio
    ) {}

    async atualiza (data: any): Promise<boolean> {
        const [id, tipo_pagamento, status, produtos ] = data
        const data_atualizacao = KnexHelper.getDateNow()
        const compra = {
            tipo_pagamento,
            status,
            produtos,
            data_atualizacao
        }
        const result = this.atualizarCompraRepositorio.atualiza(compra, id)
        return result
    }
}