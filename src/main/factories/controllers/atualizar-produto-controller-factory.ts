import { AtualizarProdutoController } from "../../../presentation/controllers"
import { Controller } from "../../../presentation/protocols"
import { makeAtualizaProduto } from ".."

export const makeAtualizarProdutoController = (): Controller => {
    return new AtualizarProdutoController(makeAtualizaProduto())
}