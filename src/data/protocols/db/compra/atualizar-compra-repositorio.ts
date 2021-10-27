import { AtualizacaoCompraModel } from "../../../../domain/models"

export interface AtualizarCompraRepositorio {
    atualiza (data: AtualizacaoCompraModel, id: number): Promise<boolean>
}