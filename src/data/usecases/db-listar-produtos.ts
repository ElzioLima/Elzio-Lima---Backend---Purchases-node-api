import { ListarProdutos } from "../../domain/usecases"
import { ProdutoModel } from "../../domain/models/produto"
import { ListarProdutosRepositorio } from "../protocols/db/produto/listar-produtos-repositorio"

export class DBListarProdutos implements ListarProdutos {
    constructor (
        private readonly listarProdutosRepositorio: ListarProdutosRepositorio
    ) {}

    async lista (): Promise<ProdutoModel[]> {
        const result = await this.listarProdutosRepositorio.lista()
        return result
    }
}