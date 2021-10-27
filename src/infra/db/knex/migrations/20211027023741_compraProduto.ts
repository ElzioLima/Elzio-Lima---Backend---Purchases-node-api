import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('compraProduto', (table) => {
        table.bigIncrements("id")
        table.foreign("compra_id").references("id").inTable("compra").notNullable().onDelete('CASCADE')
        table.foreign("produto_id").references("id").inTable("produto").notNullable().onDelete('CASCADE')
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('compraProduto')
}

