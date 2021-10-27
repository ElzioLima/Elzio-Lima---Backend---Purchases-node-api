import { CadastroProdutoModel } from "../models/produto"

export interface CadastrarProduto {
    cadastra (data: any): Promise<boolean>
}