import setupRoutes from "../config/routes"
import setupSwagger from "../config/swagger"

import express, { Express } from "express"

export const setupApp = async (): Promise<Express> => {
  const app = express()
  setupSwagger(app)
  setupRoutes(app)
  return app
}
