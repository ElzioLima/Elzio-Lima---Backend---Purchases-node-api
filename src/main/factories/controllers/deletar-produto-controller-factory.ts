import { DeletarProdutoController } from "../../../presentation/controllers"
import { Controller } from "../../../presentation/protocols"
import { makeDeletarProduto } from ".."
import { makeDeletarProdutoValidation } from "./deletar-produto-validation-factory"

export const makeDeletarProdutoController = (): Controller => {
    return new DeletarProdutoController(makeDeletarProduto(), makeDeletarProdutoValidation())
}