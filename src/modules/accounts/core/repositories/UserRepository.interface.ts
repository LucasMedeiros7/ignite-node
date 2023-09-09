import { User } from '../../storage/typeorm/models/User.model'
import { CreateUserDTO } from '../dtos/CreateUserDTO'

export interface UserRepository {
  create: (userData: CreateUserDTO) => Promise<void>
  findByEmail: (email: string) => Promise<User | null>
  findById: (userId: string) => Promise<User | null>
}
