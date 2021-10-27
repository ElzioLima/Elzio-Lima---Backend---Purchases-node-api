import { CadastroCompraModel } from "../models"

export interface AtualizarCompra {
    atualiza (data: any): Promise<boolean>
}