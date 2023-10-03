import { AuthenticateUserController } from '@modules/accounts/http/AuthenticateUser.controller'
import { Router } from 'express'

const authenticateRoutes = Router()
const authenticateUserController = new AuthenticateUserController()

authenticateRoutes.post('/session', authenticateUserController.handle)

export { authenticateRoutes }
