import { CompraModel } from "../models"

export interface ListarCompras {
    lista (): Promise<CompraModel[]>
}