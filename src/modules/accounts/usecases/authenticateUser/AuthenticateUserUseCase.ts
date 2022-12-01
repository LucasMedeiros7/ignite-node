import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { IUserRepository } from '../../repositories/IUserRepository';
import { AppError } from '../../../../errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new AppError('Email or password incorrect!');
    }
    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
      throw new AppError('Email or password incorrect!');
    }
    const secret = '3e44cae1aa332b5813823f09f7c85bd8';
    const token = sign({}, secret, { subject: user.id, expiresIn: '1h' });
    const accessToken = {
      user: { name: user.name, email: user.email },
      token
    };
    return accessToken;
  }
}
