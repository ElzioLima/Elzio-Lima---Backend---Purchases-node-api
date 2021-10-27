import { ListarComprasController } from "../../../presentation/controllers"
import { Controller } from "../../../presentation/protocols"
import { makeListarCompras } from ".."

export const makeListarComprasController = (): Controller => {
    return new ListarComprasController(makeListarCompras())
}