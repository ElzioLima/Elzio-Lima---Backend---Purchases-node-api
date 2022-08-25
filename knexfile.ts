// Update with your config settings.

module.exports = {
    client: 'mysql2',
        connection: {
            database: 'purchase',
            user: 'root',
            password: 'purchase202!'
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
