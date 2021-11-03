import { KnexHelper } from "../../infra/db"
import { CadastrarCompra } from "../../domain/usecases"
import { CadastrarCompraRepositorio } from "../protocols/db/compra/cadastrar-compra-repositorio"

export class DBCadastrarCompra implements CadastrarCompra{
    constructor (
        private readonly cadastrarCompraRepositorio: CadastrarCompraRepositorio
    ) {}

    async cadastra (data: any, produtos: number[]): Promise<boolean> {
        const compra = {
            ...data
        }
        const result = await this.cadastrarCompraRepositorio.cadastra(compra, produtos)
        return result
    }
}