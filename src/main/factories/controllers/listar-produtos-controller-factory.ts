import { ListarProdutosController } from "../../../presentation/controllers"
import { Controller } from "../../../presentation/protocols"
import { makeListarProdutos } from ".."

export const makeListarProdutoController = (): Controller => {
    return new ListarProdutosController(makeListarProdutos())
}