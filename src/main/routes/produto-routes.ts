import { Router } from "express"
import { adaptRoute } from "../adapters"
import { makeAtualizarProdutoController, makeCadastrarProdutoController, makeDeletarProdutoController, makeListarProdutoController } from "../factories"

export default (router: Router): void => {
    router.post("/produto/cadastrar", adaptRoute(makeCadastrarProdutoController()))
    router.put("/produto/atualizar", adaptRoute(makeAtualizarProdutoController()))
    router.get("/produto/listar", adaptRoute(makeListarProdutoController()))
    router.delete("/produto/deletar", adaptRoute(makeDeletarProdutoController()))
}