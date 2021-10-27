import { Knex } from "knex"


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('produto', (table) => {
        table.bigIncrements("id")
        table.string("nome").notNullable()
        table.string("descricao").notNullable()
        table.double("preco").notNullable()
        table.timestamp("data_criacao").notNullable().defaultTo(knex.fn.now())
        table.timestamp("data_atualizacao").notNullable().defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('produto');
}

