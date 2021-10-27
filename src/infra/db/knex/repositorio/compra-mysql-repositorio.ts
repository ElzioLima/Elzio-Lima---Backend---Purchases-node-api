import { KnexHelper } from "../../../../infra/db"
import { CadastroCompraModel, AtualizacaoCompraModel, CompraModel } from "../../../../domain/models"
import { CadastrarCompraRepositorio, AtualizarCompraRepositorio, ListarComprasRepositorio, DeletarCompraRepositorio } from "../../../../data/protocols/db/compra"

export class CompraMysqlRepositorio implements CadastrarCompraRepositorio, AtualizarCompraRepositorio, ListarComprasRepositorio, DeletarCompraRepositorio {
    async cadastra (data: CadastroCompraModel): Promise<boolean> {
        const compraRelation = KnexHelper.getRelation("compra")
        const id = compraRelation.insert(data)
        if (id) {
            return true
        }
        return false
    }

    async atualiza (data: AtualizacaoCompraModel, id: number): Promise<boolean> {
        const compraRelation = KnexHelper.getRelation("compra")
        const result = compraRelation.update(data).where({id})
        if (id) {
            return true
        }
        return false
    }

    async lista (): Promise<CompraModel[]> {
        const compraRelation = KnexHelper.getRelation("compra")
        const compras = compraRelation.select()
        return compras
    }

    async deleta (data: number): Promise<boolean> {
        const compraRelation = KnexHelper.getRelation("produto")
        const id = compraRelation.delete().where({data}).returning("id")
        if (id) {
            return true
        }
        return false
    }
}