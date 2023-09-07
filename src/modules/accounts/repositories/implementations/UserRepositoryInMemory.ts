import { CreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { User } from '@modules/accounts/entities/User'
import { IUserRepository } from '../IUserRepository'

export class UserRepositoryInMemory implements IUserRepository {
  private readonly users: User[] = []

  async create (userData: CreateUserDTO): Promise<void> {
    const { name, email, password, driver_license, avatar } = userData
    const user = new User()
    Object.assign(user, {
      name,
      email,
      password,
      driver_license,
      avatar
    })
    this.users.push(user)
  }

  async findByEmail (email: string): Promise<User | null> {
    const user = this.users.find((u) => u.email === email)
    return user ?? null
  }

  async findById (userId: string): Promise<User | null> {
    const user = this.users.find((u) => u.id === userId)
    return user ?? null
  }
}
