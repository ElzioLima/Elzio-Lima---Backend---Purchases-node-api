import { KnexHelper } from "../../../../infra/db"
import { CadastrarProdutoRepositorio, AtualizarProdutoRepositorio, ListarProdutosRepositorio, DeletarProdutoRepositorio } from "../../../../data/protocols/db/produto"
import { CadastroProdutoModel, AtualizacaoProdutoModel, ProdutoModel } from "../../../../domain/models"

export class ProdutoMysqlRepositorio implements CadastrarProdutoRepositorio, AtualizarProdutoRepositorio, ListarProdutosRepositorio, DeletarProdutoRepositorio {
    async cadastra (data: CadastroProdutoModel): Promise<boolean> {
        const produtoRelation = KnexHelper.getRelation("produto")
        const result = await produtoRelation.insert(data)
        if (!result) {
            return false
        }
        return true
    }

    async atualiza (data: AtualizacaoProdutoModel, id: number): Promise<boolean> {
        const produtoRelation = KnexHelper.getRelation("produto")
        const result = await produtoRelation.update(data).where({id})
        if (!result) {
            return false
        }
        return true
    }

    async lista (): Promise<ProdutoModel[]> {
        const produtoRelation = KnexHelper.getRelation("produto")
        const result = await produtoRelation.select("*")
        return result
    }

    async deleta (id: number): Promise<boolean> {
        const produtoRelation = KnexHelper.getRelation("produto")
        const result = await produtoRelation.delete().where({ id })
        if (!result) {
            return false
        }
        return true
    }
}