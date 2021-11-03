export const atualizarCompraParamsSchema = {
    type: "object",
    properties: {
        id: {
            type: "number"
        },
        tipo_pagamento: {
            type: "string"
        },
        status: {
            type: "string"
        },
        produtos: {
            type: "array",
            items: {
                type: "number"
            }
        }
    },
    require: ["id", "tipo_pagamento", "status", "produtos"]
}  