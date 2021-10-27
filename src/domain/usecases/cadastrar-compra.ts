import { CadastroCompraModel } from "../models"

export interface CadastrarCompra {
    cadastra (data: any): Promise<boolean>
}