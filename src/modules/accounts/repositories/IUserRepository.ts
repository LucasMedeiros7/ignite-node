import { CreateUserDTO } from '../dtos/ICreateUserDTO';

export interface IUserRepository {
  create(userData: CreateUserDTO): Promise<void>;
}
