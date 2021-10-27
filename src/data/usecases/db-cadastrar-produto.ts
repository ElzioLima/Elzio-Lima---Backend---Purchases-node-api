import { KnexHelper } from "../../infra/db"
import { CadastrarProduto } from "../../domain/usecases/cadastrar-produto"
import { CadastrarProdutoRepositorio } from "../protocols/db/produto/cadastrar-produto-repositorio"

export class DBCadastrarProduto implements CadastrarProduto {
    constructor (
        private readonly cadastrarProdutoRepositorio: CadastrarProdutoRepositorio
    ) {}

    async cadastra (data: any): Promise<boolean> {
        const [ nome, descricao, preco ] = data
        const data_criacao = KnexHelper.getDateNow()
        const data_atualizacao = KnexHelper.getDateNow()
        const produto = {
            nome,
            descricao,
            preco,
            data_criacao,
            data_atualizacao
        }
        const result = this.cadastrarProdutoRepositorio.cadastra(produto)
        return result
    }
}