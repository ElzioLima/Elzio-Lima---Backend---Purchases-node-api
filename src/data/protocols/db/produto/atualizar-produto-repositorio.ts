import { AtualizacaoProdutoModel } from "../../../../domain/models/produto"

export interface AtualizarProdutoRepositorio {
    atualiza (data: AtualizacaoProdutoModel): Promise<boolean>
}