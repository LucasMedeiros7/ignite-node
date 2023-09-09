import 'reflect-metadata'

import { CreateUserUseCase } from '../CreateUser.useCase'
import { AuthenticateUserUseCase } from '../AuthenticateUser.useCase'
import { AppError } from '../../../../../shared/errors/AppError'
import { CreateUserDTO } from '../../dtos/CreateUserDTO'
import { UserRepositoryInMemory } from './fake/UserRepositoryInMemory'

describe('Authenticate User Use Case', () => {
  let authenticateUserUseCase: AuthenticateUserUseCase
  let userRepository: UserRepositoryInMemory
  let createUserUseCase: CreateUserUseCase

  beforeEach(async () => {
    userRepository = new UserRepositoryInMemory()
    authenticateUserUseCase = new AuthenticateUserUseCase(userRepository)
    createUserUseCase = new CreateUserUseCase(userRepository)
    const userToCreate: CreateUserDTO = {
      driver_license: 'any_license',
      name: 'Test User',
      email: 'test@example.com',
      password: 'password'
    }
    await createUserUseCase.execute(userToCreate)
  })

  it('should authenticate a user successfully', async () => {
    const authenticationResult = await authenticateUserUseCase.execute({
      email: 'test@example.com',
      password: 'password'
    })

    expect(authenticationResult).toHaveProperty('token')
    expect(authenticationResult).toHaveProperty('user')
    expect(authenticationResult.user).toHaveProperty('name', 'Test User')
    expect(authenticationResult.user).toHaveProperty('email', 'test@example.com')
  })

  it('should throw an error if the email does not exist', async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: 'nonexistent@example.com',
        password: 'password'
      })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should throw an error if the password is incorrect', async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: 'test@example.com',
        password: 'wrong_password'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
