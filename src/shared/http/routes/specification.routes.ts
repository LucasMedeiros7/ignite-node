import { CreateSpecificationController } from '@modules/cars/http/specifications/CreateSpecification.controller'
import { ensureAuthenticated } from '@shared/http/middlewares/ensureAuthenticated'
import { Router } from 'express'

const specificationRoutes = Router()
const createSpecificationController = new CreateSpecificationController()

specificationRoutes.use(ensureAuthenticated)
specificationRoutes.post('/', createSpecificationController.handle)

export { specificationRoutes }
