import { Router } from 'express'
import { authenticateRoutes } from './authenticate.routes'
import { carsRoutes } from './cars.routes'
import { categoriesRoutes } from './categories.routes'
import { specificationRoutes } from './specification.routes'
import { userRoutes } from './user.routes'

const router = Router()
router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationRoutes)
router.use('/users', userRoutes)
router.use('/cars', carsRoutes)
router.use(authenticateRoutes)

export { router }
