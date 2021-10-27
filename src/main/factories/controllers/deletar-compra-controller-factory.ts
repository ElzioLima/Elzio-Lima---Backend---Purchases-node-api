import { DeletarProdutoController } from "../../../presentation/controllers"
import { Controller } from "../../../presentation/protocols"
import { makeDeletarCompra } from "../usecases"
import { makeDeletarCompraValidation } from "./deletar-compra-validation-factory"

export const makeDeletarCompraController = (): Controller => {
    return new DeletarProdutoController(makeDeletarCompra(), makeDeletarCompraValidation())
}