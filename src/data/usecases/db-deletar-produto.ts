import { DeletarProduto } from "../../domain/usecases"
import { DeletarProdutoRepositorio } from "../protocols/db/produto/deletar-produto-repositorio"

export class DBDeletarProduto implements DeletarProduto {
    constructor (
        private readonly deletarProdutoRepositorio: DeletarProdutoRepositorio
    ) {}

    async deleta (id: number): Promise<boolean> {
        const result = this.deletarProdutoRepositorio.deleta(id)
        return result
    }
}