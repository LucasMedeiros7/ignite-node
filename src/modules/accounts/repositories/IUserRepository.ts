import { CreateUserDTO } from '../dtos/ICreateUserDTO'
import { User } from '../entities/User'

export interface IUserRepository {
  create: (userData: CreateUserDTO) => Promise<void>
  findByEmail: (email: string) => Promise<User | null>
  findById: (userId: string) => Promise<User | null>
}