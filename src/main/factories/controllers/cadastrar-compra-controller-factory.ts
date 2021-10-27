import { CadastrarCompraController } from "../../../presentation/controllers"
import { Controller } from "../../../presentation/protocols"
import { makeCadastrarCompra } from "../usecases"
import { makeCadastrarCompraValidation } from "./cadastrar-compra-validation-factory"

export const makeCadastrarCompraController = (): Controller => {
    return new CadastrarCompraController(makeCadastrarCompra(), makeCadastrarCompraValidation())
}