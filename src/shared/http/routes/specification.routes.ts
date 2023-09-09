import { ensureAuthenticated } from '@shared/http/middlewares/ensureAuthenticated'
import { CreateSpecificationController } from '@modules/cars/useCases/createSpecifications/CreateSpecificationController'
import { Router } from 'express'

const specificationRoutes = Router()
const createSpecificationController = new CreateSpecificationController()

specificationRoutes.use(ensureAuthenticated)
specificationRoutes.post('/', createSpecificationController.handle)

export { specificationRoutes }
