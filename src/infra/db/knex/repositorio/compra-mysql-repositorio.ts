import { KnexHelper } from "../../../../infra/db"
import { CadastroCompraModel, AtualizacaoCompraModel, CompraModel } from "../../../../domain/models"
import { CadastrarCompraRepositorio, AtualizarCompraRepositorio, ListarComprasRepositorio, DeletarCompraRepositorio } from "../../../../data/protocols/db/compra"

export class CompraMysqlRepositorio implements CadastrarCompraRepositorio, AtualizarCompraRepositorio, ListarComprasRepositorio, DeletarCompraRepositorio {
    async cadastra (data: CadastroCompraModel, produtos: number[]): Promise<boolean> {
        const result = await KnexHelper.getTransaction(async (trx) => {
            const [ id ] = await trx("compra").insert(data)
            const compraProduto = await trx("produto").select({
                compra_id: id,
                produto_id: "produto.id"
            }).whereIn("id", produtos)
            const result = await trx("compra_produto").insert(compraProduto)
            return result
        })
        if (!result) {
            return false
        }
        return true
    }

    async atualiza (data: AtualizacaoCompraModel, produtos: number[], id: number): Promise<boolean> {
        const result = await KnexHelper.getTransaction(async (trx) => {
            await trx("compra").update(data).where({id})
            const compraProduto = await trx("produto").select({
                compra_id: id,
                produto_id: "produto.id"
            }).whereIn("id", produtos)
            await trx("compra_produto").delete().where({ compra_id: id })
            const result = await trx("compra_produto").insert(compraProduto).into("compra_produto")
            return result
        })
        if (!result) {
            return false
        }
        return true
    }

    async lista (): Promise<CompraModel[]> {
        const compraRelation = KnexHelper.getRelation("compra")
        const result = compraRelation.select(
            function () {
                this.raw("select compra.*, (select sum(preco) from prodututo_id from compra_produto where compra_id = compra.id)) as total from compra inner join produto where produto.id in (select produto_id from compra_produto where compra_id = compra.id)")
            }
        )
        console.log(result)
        return result
    }

    async deleta (id: number): Promise<boolean> {
        const result = await KnexHelper.getTransaction(async (trx) => {
            const compraId = await trx("compra").delete().where({ id })
            await trx("compra_produto").delete().where({ compra_id: compraId})
        })
        if (result) {
            return true
        }
        return false
    }
}