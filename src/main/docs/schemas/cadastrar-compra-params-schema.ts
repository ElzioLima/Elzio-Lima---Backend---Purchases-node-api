export const cadastrarCompraParamsSchema = {
    type: "object",
    properties: {
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
    require: ["tipo_pagamento", "status", "produtos"]
}  