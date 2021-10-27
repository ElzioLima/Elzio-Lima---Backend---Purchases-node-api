import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('compra', (table) => {
        table.bigIncrements("id")
        table.double("total")
        table.timestamp("data_criacao").defaultTo(knex.fn.now())
        table.string("tipo_pagamento")
        table.string("status")
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('produto')
}

