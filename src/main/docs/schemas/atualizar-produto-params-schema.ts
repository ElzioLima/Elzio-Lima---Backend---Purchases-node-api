export const atualizarProdutoParamsSchema = {
    type: "object",
    properties: {
        nome: {
            type: "string"
        },
        descricao: {
            type: "string"
        },
        preco: {
            type: "number"
        }
    },
    require: [ "nome", "descricao", "preco" ]
}  