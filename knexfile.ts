// Update with your config settings.

module.exports = {
    client: 'mysql2',
        connection: {
            database: 'icts',
            user: 'root',
            password: 'icts202!'
        },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: `${__dirname}/src/infra/db/knex/migrations`
    }
};
