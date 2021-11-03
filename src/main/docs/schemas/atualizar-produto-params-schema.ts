export const atualizarProdutoParamsSchema = {
    type: "object",
    properties: {
        id: {
            type: "number"
        },
        nome: {
            type: "string"
        },
        descricao: {
            type: "string"
        },
        preco: {
            type: "number"
        }
    }
}  