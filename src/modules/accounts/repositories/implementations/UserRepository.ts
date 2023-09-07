import { Repository } from 'typeorm'
import AppDataSource from '@database/data-source'

import { User } from '@modules/accounts/entities/User'
import { CreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { IUserRepository } from '../IUserRepository'

export class UserRepository implements IUserRepository {
  private readonly repository: Repository<User>

  constructor () {
    this.repository = AppDataSource.getRepository(User)
  }

  async create (userData: CreateUserDTO): Promise<void> {
    const { id, name, email, password, driver_license, avatar } = userData
    const user = this.repository.create({
      id,
      name,
      email,
      password,
      driver_license,
      avatar
    })
    await this.repository.save(user)
  }

  async findByEmail (email: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ email })
    return user
  }

  async findById (userId: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ id: userId })
    return user
  }
}
