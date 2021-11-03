import {
  cadastrarProdutoParamsSchema,
  atualizarProdutoParamsSchema,
  deletarProdutoParamsSchema,
  cadastrarCompraParamsSchema,
  atualizarCompraParamsSchema,
  deletarCompraParamsSchema,
  errorSchema,
  resultSchema,
  produtosSchema,
  comprasSchema,
} from "./schemas/"

export default {
  cadastrarProdutoParams: cadastrarProdutoParamsSchema,
  atualizarProdutoParams: atualizarProdutoParamsSchema,
  deletarProdutoParams: deletarProdutoParamsSchema,
  produtos: produtosSchema,
  cadastrarCompraParams: cadastrarCompraParamsSchema,
  atualizarCompraParams: atualizarCompraParamsSchema,
  deletarCompraParams: deletarCompraParamsSchema,
  compras: comprasSchema,
  error: errorSchema,
  result: resultSchema
}
