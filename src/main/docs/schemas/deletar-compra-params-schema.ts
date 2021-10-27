export const deletarCompraParamsSchema = {
    type: "object",
    properties: {
        id: {
            type: "number"
        }
    },
    require: ["id"]
}  