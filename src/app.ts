/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata'
import './shared/infra/container'
import 'express-async-errors'

import express, { NextFunction, Request, Response } from 'express'

import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

import { router } from './shared/http/routes'
import { AppError } from '@shared/errors/AppError'
import { createConnection } from '@shared/infra/typeorm/data-source'

createConnection()

const app = express()
const PORT = process.env.PORT ?? 3333

app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)

const errorHandlingMiddleware = () => {
  return (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({ message: err.message })
    }
    return res.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    })
  }
}

app.use(errorHandlingMiddleware())

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
