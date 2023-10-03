import { inject, injectable } from 'tsyringe'

import { deleteFile } from '@utils/file'
import { User } from '@modules/accounts/storage/typeorm/models/User.model'
import { UserRepository } from '../repositories/UserRepository.interface'

interface UpdateUserRequest {
  userId: string
  avatarFile: string
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async execute({ userId, avatarFile }: UpdateUserRequest): Promise<void> {
    const user = (await this.userRepository.findById(userId)) as User
    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`)
    }
    user.avatar = avatarFile
    await this.userRepository.create(user)
  }
}
