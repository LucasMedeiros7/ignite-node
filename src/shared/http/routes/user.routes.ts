import multer from 'multer'
import { Router } from 'express'

import { uploadConfig } from '@shared/infra/config/upload'
import { ensureAuthenticated } from '@shared/http/middlewares/ensureAuthenticated'
import { CreateUserController } from '@modules/accounts/http/CreateUser.controller'
import { UpdateUserAvatarController } from '@modules/accounts/http/UpdateUserAvatar.controller'

const userRoutes = Router()
const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'))
const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

userRoutes.post('/', createUserController.handle)
userRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
)

export { userRoutes }
