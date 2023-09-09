import { User } from '../../storage/typeorm/models/User.model'
import { CreateUserDTO } from '../usecases/dtos/CreateUserDTO'

export interface UserRepository {
  create: (userData: CreateUserDTO) => Promise<void>
  findByEmail: (email: string) => Promise<User | null>
  findById: (userId: string) => Promise<User | null>
}
