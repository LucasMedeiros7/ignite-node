import { delay, inject, injectable } from 'tsyringe'
import { deleteFile } from '../../../../utils/file'
import { IUserRepository } from '../../repositories/IUserRepository'
import { User } from '../../entities/User'
import { UserRepository } from '../../repositories/implementations/UserRepository'

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
