import { KnexHelper } from "../../infra/db"
import { CadastrarCompra } from "../../domain/usecases"
import { CadastrarCompraRepositorio } from "../protocols/db/compra/cadastrar-compra-repositorio"

export class DBCadastrarCompra implements CadastrarCompra{
    constructor (
        private readonly cadastrarCompraRepositorio: CadastrarCompraRepositorio
    ) {}

    async cadastra (data: any): Promise<boolean> {
        const [ tipo_pagamento, status, produtos ] = data
        const data_atualizacao = KnexHelper.getDateNow()
        const data_criacao = KnexHelper.getDateNow()
        const compra = {
            tipo_pagamento,
            status,
            produtos,
            data_criacao,
            data_atualizacao
        }
        const result = this.cadastrarCompraRepositorio.cadastra(compra)
        return result
    }
}