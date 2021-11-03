import { KnexHelper } from "../infra/db"

const knexfile = require("../../knexfile")

KnexHelper.connect(knexfile)
  .then(async () => {
    const { setupApp } = await import("./config/app")
    const app = await setupApp()
    app.listen(5050, () => console.log(`Server running at http://localhost:${5050}`))
  })
  .catch(console.error)