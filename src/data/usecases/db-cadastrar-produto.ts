import { KnexHelper } from "../../infra/db"
import { CadastrarProduto } from "../../domain/usecases/cadastrar-produto"
import { CadastrarProdutoRepositorio } from "../protocols/db/produto/cadastrar-produto-repositorio"

export class DBCadastrarProduto implements CadastrarProduto {
    constructor (
        private readonly cadastrarProdutoRepositorio: CadastrarProdutoRepositorio
    ) {}

    async cadastra (data: any): Promise<boolean> {
        const produto = {
            ...data
        }
        const result = await this.cadastrarProdutoRepositorio.cadastra(produto)
        return result
    }
}