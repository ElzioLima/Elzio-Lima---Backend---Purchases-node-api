import { ProdutoModel } from ".";

export type CompraModel = {
    id: number
    total: number
    data_criacao: any
    tipo_pagamento: String
    status: String
    produtos: ProdutoModel[]
}

export type CadastroCompraModel = {
    data_criacao: any
    tipo_pagamento: String
    status: String
    produtos: number[]
}

export type AtualizacaoCompraModel = {
    tipo_pagamento: String
    status: String
}