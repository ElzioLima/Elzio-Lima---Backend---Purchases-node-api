export const atualizarCompraParamsSchema = {
    type: "object",
    properties: {
        tipo_pagamento: {
            type: "string"
        },
        status: {
            type: "string"
        },
        produtos: {
            type: "array"
        }
    },
    require: ["tipo_pagamento", "status", "produtos"]
}  