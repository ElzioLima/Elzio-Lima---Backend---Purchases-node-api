// Update with your config settings.

const path = require('path');

module.exports = {
  development: {
      client: 'mysql2',
      connection: {
          database: 'icts',
          user: 'icts',
          password: '232oZ9Oe',
      },
      migrations: {
          tableName: 'knex_migrations',
          directory: `${__dirname}/src/infra/db/knex/migrations`,
      }
  },
  production: {
      client: 'mysql2',
      connection: {
          connectionString: process.env.DATABASE_URL,
          ssl: {
              rejectUnauthorized: false,
          },
      },
      migrations: {
          tableName: 'knex_migrations',
          directory: `${__dirname}/src/infra/db/knex/migrations`,
      }
  },
};