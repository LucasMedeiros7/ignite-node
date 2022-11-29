import { inject, injectable } from 'tsyringe';
import { CreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(userData: CreateUserDTO): Promise<void> {
    await this.userRepository.create(userData);
  }
}
