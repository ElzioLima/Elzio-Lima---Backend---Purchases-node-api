import { CompraModel } from "../../../../domain/models"

export interface ListarComprasRepositorio {
    lista (): Promise<CompraModel[]>
}