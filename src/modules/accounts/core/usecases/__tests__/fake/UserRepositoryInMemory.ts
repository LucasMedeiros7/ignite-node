import { UserRepository } from '@modules/accounts/core/repositories/UserRepository.interface'
import { User } from '@modules/accounts/storage/typeorm/models/User.model'
import { CreateUserDTO } from '../../dtos/CreateUserDTO'

export class UserRepositoryInMemory implements UserRepository {
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
