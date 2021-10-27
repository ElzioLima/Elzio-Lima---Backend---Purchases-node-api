import { KnexHelper } from "../../../../infra/db"
import { CadastrarProdutoRepositorio, AtualizarProdutoRepositorio, ListarProdutosRepositorio, DeletarProdutoRepositorio } from "../../../../data/protocols/db/produto"
import { CadastroProdutoModel, AtualizacaoProdutoModel, ProdutoModel } from "../../../../domain/models"

export class ProdutoMysqlRepositorio implements CadastrarProdutoRepositorio, AtualizarProdutoRepositorio, ListarProdutosRepositorio, DeletarProdutoRepositorio {
    async cadastra (data: CadastroProdutoModel): Promise<boolean> {
        const produtoRelation = KnexHelper.getRelation("produto")
        const id = produtoRelation.insert(data).returning("id")
        if (id) {
            return true
        }
        return false
    }

    async atualiza (data: AtualizacaoProdutoModel): Promise<boolean> {
        const produtoRelation = KnexHelper.getRelation("produto")
        const id = produtoRelation.update(data).returning("id")
        if (id) {
            return true
        }
        return false
    }

    async lista (): Promise<ProdutoModel[]> {
        const produtoRelation = KnexHelper.getRelation("produto")
        const produtos = produtoRelation.select("*")
        return produtos
    }

    async deleta (data: number): Promise<boolean> {
        const produtoRelation = KnexHelper.getRelation("produto")
        const id = produtoRelation.delete().where({data}).returning("id")
        if (id) {
            return true
        }
        return false
    }
}