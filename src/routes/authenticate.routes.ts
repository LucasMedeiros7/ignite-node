import { Router } from 'express'
import { AuthenticateUserController } from '../modules/accounts/usecases/authenticateUser/AuthenticateUserController'

const authenticateRoutes = Router()
const authenticateUserController = new AuthenticateUserController()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
authenticateRoutes.post('/session', authenticateUserController.handle)

export { authenticateRoutes }
