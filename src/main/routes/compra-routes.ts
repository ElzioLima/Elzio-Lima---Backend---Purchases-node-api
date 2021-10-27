import { Router } from "express"
import { makeCadastrarCompraController, makeAtualizarCompraController, makeListarComprasController, makeDeletarCompraController } from "../factories"
import { adaptRoute } from "../adapters"

export default (router: Router): void => {
    router.post("/compra/cadastrar", adaptRoute(makeCadastrarCompraController()))
    router.put("/compra/atualizar", adaptRoute(makeAtualizarCompraController()))
    router.get("/compra/listar", adaptRoute(makeListarComprasController()))
    router.delete("/compra/deletar", adaptRoute(makeDeletarCompraController()))
}