import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { UpdateUserAvatarUseCase } from '../usecases/UpdateUserAvatar.useCase'

export class UpdateUserAvatarController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user
    const file = request.file as Express.Multer.File
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)
    await updateUserAvatarUseCase.execute({ userId, avatarFile: file.filename })
    return response.sendStatus(204)
  }
}
