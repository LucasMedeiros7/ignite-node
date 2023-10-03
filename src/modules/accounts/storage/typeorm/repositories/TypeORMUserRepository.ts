/* eslint-disable camelcase */
import 'reflect-metadata'
import { Repository } from 'typeorm'

import { User } from '../models/User.model'
import { CreateUserDTO } from '@modules/accounts/core/dtos/CreateUserDTO'
import { UserRepository } from '@modules/accounts/core/repositories/UserRepository.interface'
import AppDataSource from '@shared/infra/typeorm/data-source'

export class TypeORMUserRepository implements UserRepository {
  private readonly repository: Repository<User>

  constructor() {
    this.repository = AppDataSource.getRepository(User)
  }

  async create(userData: CreateUserDTO): Promise<void> {
    const { id, name, email, password, driver_license, avatar } = userData
    const user = this.repository.create({
      id,
      name,
      email,
      password,
      driver_license,
      avatar,
    })
    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ email })
    return user
  }

  async findById(userId: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ id: userId })
    return user
  }
}
