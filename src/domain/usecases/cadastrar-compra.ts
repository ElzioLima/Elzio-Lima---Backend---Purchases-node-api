import { CadastroCompraModel } from "../models"

export interface CadastrarCompra {
    cadastra (data: any, produtos: number[]): Promise<boolean>
}