import { hash } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'

import { AppError } from '@errors/AppError'
import { CreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'

@injectable()
export class CreateUserUseCase {
  constructor (
    @inject('IUserRepository')
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
