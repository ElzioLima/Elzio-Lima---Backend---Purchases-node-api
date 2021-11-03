import { AtualizacaoCompraModel } from "../../../../domain/models"

export interface AtualizarCompraRepositorio {
    atualiza (data: AtualizacaoCompraModel, produto: number[], id: number): Promise<boolean>
}