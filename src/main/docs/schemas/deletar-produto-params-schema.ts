export const deletarProdutoParamsSchema = {
    type: "object",
    properties: {
        id: {
            type: "number"
        }
    },
    require: ["id"]
}  