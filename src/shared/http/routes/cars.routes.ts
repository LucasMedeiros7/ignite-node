import { CreateCarController } from '@modules/cars/http/cars/CreateCar.controller'
import { Router } from 'express'

const carsRoutes = Router()
const createCarUserController = new CreateCarController()

carsRoutes.post('/', createCarUserController.handle)

export { carsRoutes }
