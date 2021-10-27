import { ProdutoModel } from "../models/produto"

export interface ListarProdutos {
    lista (): Promise<ProdutoModel[]>
}