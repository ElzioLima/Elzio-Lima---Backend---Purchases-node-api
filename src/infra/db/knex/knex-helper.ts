import { Knex, knex } from "knex"

export const KnexHelper = {
    client: null as Knex,
    options: null as {},

    async connect (options: string): Promise<void> {
        this.options = options
        this.client = await knex(this.options)
    },

    getRelation (relation: string): Knex {
        return this.client(relation)
    },

    getDateNow (): any {
        return this.client.fn.now()
    }
}