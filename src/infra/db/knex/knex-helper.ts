import { Knex, knex } from "knex"

export const KnexHelper = {
    client: null as Knex,
    options: null as {},

    async connect (config: any): Promise<void> {
        this.options = config
        this.client = await knex(config)
    },

    getRelation (relation: string | {}): Knex {
        if (!this.options) {
            return undefined
        }
        return this.client(relation)
    },

    getDateNow (): any {
        if (!this.options) {
            return undefined
        }
        return this.client.fn.now()
    },

    getRaw (query: string): any {
        if (!this.options) {
            return undefined
        }
        return this.client.raw(query)
    },

    async getTransaction (callback: (trx) => {}): Promise<any> {
        if (!this.options) {
            return undefined
        }
        return await this.client.transaction(callback)
            .then(this.client.commit)
            .catch(this.client.rollback)
    }
}