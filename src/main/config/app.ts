import setupRoutes from "../config/routes"
import setupSwagger from "../config/swagger"
import setupMiddlewares from "../config/middlewares"

import express, { Express } from "express"

export const setupApp = async (): Promise<Express> => {
  const app = express()
  setupSwagger(app)
  setupMiddlewares(app)
  setupRoutes(app)
  return app
}
