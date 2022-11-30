import AppDataSource from '../../../../database/data-source';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create(userData: CreateUserDTO): Promise<void> {
    const { name, email, password, driver_license } = userData;
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license
    });
    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email });
    return user;
  }

  async findById(userId: string): Promise<User> {
    const user = await this.repository.findOneBy({ id: userId });
    return user;
  }
}
