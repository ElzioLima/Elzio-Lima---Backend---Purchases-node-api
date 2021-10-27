const knexfile = require("../../infra/db/knex/config")

export default {
  knexUrl: process.env.MYSQL2_URL || knexfile.production,
  port: process.env.PORT || 5050,
}
