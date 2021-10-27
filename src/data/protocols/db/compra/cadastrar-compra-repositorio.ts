import { CadastroCompraModel } from "../../../../domain/models"

export interface CadastrarCompraRepositorio {
    cadastra (data: CadastroCompraModel): Promise<boolean>
}