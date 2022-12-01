import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

export class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;
    const avatarFile = request.file.filename;
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);
    await updateUserAvatarUseCase.execute({ userId, avatarFile });
    return response.sendStatus(204);
  }
}
