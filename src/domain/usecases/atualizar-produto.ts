import { CadastroProdutoModel } from "../models/produto"

export interface AtualizarProduto {
    atualiza (data: any): Promise<boolean>
}