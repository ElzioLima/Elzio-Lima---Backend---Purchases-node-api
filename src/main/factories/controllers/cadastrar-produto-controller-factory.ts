import { CadastrarProdutoController } from "../../../presentation/controllers/cadastrar-produto-controller"
import { Controller } from "../../../presentation/protocols"
import { makeCadastrarProduto } from ".."
import { makeCadastrarProdutoValidation } from "./cadastrar-produto-validation-factory"

export const makeCadastrarProdutoController = (): Controller => {
    return new CadastrarProdutoController(makeCadastrarProduto(), makeCadastrarProdutoValidation())
}