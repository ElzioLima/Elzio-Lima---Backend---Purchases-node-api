import { DeletarProduto } from "../../domain/usecases"
import { DeletarProdutoRepositorio } from "../protocols/db/produto/deletar-produto-repositorio"

export class DBDeletarProduto implements DeletarProduto {
    constructor (
        private readonly deletarProdutoRepositorio: DeletarProdutoRepositorio
    ) {}

    async deleta (data: number): Promise<boolean> {
        const result = await this.deletarProdutoRepositorio.deleta(data)
        return result
    }
}