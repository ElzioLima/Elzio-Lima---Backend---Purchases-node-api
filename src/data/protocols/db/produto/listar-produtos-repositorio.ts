import { Produto } from "../../../../domain/models/produto"

export interface ListarProdutosRepositorio {
    lista (): Promise<Produto[]>
}