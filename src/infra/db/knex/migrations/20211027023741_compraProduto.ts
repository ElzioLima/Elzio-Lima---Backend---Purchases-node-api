import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('compra_produto', (table) => {
        table.bigInteger("compra_id").unsigned().notNullable().references("compra.id").onDelete('CASCADE')
        table.bigInteger("produto_id").unsigned().notNullable().references("produto.id")
    })
}

export  async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('compra_produto')
}

