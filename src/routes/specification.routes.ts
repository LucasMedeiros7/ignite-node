/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecifications/CreateSpecificationController'

const specificationRoutes = Router()
const createSpecificationController = new CreateSpecificationController()

specificationRoutes.use(ensureAuthenticated)
specificationRoutes.post('/', createSpecificationController.handle)

export { specificationRoutes }
