import { 
    cadastrarProdutoPath, 
    atualizarProdutoPath, 
    listarProdutoPath, 
    deletarProdutoPath,
    cadastrarCompraPath,
    atualizarCompraPath,
    listarComprasPath,
    deletarCompraPath
} from "./paths/"

export default {
    "/produto/cadastrar": cadastrarProdutoPath,
    "/produto/atualizar": atualizarProdutoPath,
    "/produto/listar": listarProdutoPath,
    "/produto/deletar": deletarProdutoPath,
    "/compra/cadastrar": cadastrarCompraPath,
    "/compra/atualizar": atualizarCompraPath,
    "/compra/listar": listarComprasPath,
    "/compra/deletar": deletarCompraPath
}