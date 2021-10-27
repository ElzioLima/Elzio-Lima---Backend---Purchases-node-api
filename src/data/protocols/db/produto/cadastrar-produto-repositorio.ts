import { CadastroProdutoModel } from "../../../../domain/models/produto"

export interface CadastrarProdutoRepositorio {
    cadastra (data: CadastroProdutoModel): Promise<boolean>
}