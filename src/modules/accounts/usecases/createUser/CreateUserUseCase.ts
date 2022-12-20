import { hash } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppError'
import { CreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUserRepository } from '../../repositories/IUserRepository'

@injectable()
export class CreateUserUseCase {
  constructor (
    @inject('UserRepository')
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
