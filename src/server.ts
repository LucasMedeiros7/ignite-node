/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
import 'reflect-metadata'
import './shared/container'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import { router } from './routes'
import { AppError } from './errors/AppError'
import { createConnection } from './database/data-source'

createConnection()
const app = express()
const PORT = process.env.PORT || 3333

app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      })
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`
    })
  }
)

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
