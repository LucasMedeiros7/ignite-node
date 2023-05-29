import { hash } from 'bcryptjs'
import { delay, inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppError'
import { CreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUserRepository } from '../../repositories/IUserRepository'
import { UserRepository } from '../../repositories/implementations/UserRepository'

@injectable()
export class CreateUserUseCase {
  constructor (
    @inject(delay(() => UserRepository))
    private readonly userRepository: IUserRepository
  ) {}

  async execute (userData: CreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(
      userData.email
    )
    if (userAlreadyExists) {
      throw new AppError('User already exists')
    }
    const hashPassword = await hash(userData.password, 8)
    await this.userRepository.create({ ...userData, password: hashPassword })
  }
}
