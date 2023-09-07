import { delay, inject, injectable } from 'tsyringe'

import { User } from '@modules/accounts/entities/User'
import { UserRepository } from '@modules/accounts/repositories/implementations/UserRepository'
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'
import { deleteFile } from '@utils/file'

interface IRequest {
  userId: string
  avatarFile: string
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor (
    @inject(delay(() => UserRepository))
    private readonly userRepository: IUserRepository
  ) {}

  async execute ({ userId, avatarFile }: IRequest): Promise<void> {
    const user = await this.userRepository.findById(userId) as User
    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`)
    }
    user.avatar = avatarFile
    await this.userRepository.create(user)
  }
}
