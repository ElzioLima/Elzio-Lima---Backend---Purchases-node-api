import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('compra', (table) => {
        table.bigIncrements("id").notNullable().primary()
        table.timestamp("data_criacao").notNullable().defaultTo(knex.fn.now())
        table.string("tipo_pagamento").notNullable()
        table.string("status").notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('produto')
}

