import { AtualizarCompraController } from "../../../presentation/controllers"
import { Controller } from "../../../presentation/protocols"
import { makeAtualizarCompra } from ".."

export const makeAtualizarCompraController = (): Controller => {
    return new AtualizarCompraController(makeAtualizarCompra())
}