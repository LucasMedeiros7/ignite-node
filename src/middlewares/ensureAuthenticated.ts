import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '../modules/accounts/repositories/implementations/UserRepository';
import { AppError } from '../errors/AppError';

interface TokenPayload {
  sub: string;
}

async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;
  if (!authorization) {
    throw new AppError('Token missing!', 401);
  }
  const token = authorization.split(' ')[1];
  const secret = '3e44cae1aa332b5813823f09f7c85bd8';
  try {
    const { sub: userId } = verify(token, secret) as TokenPayload;
    const userRepository = new UserRepository();
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new AppError('User does not exists!', 401);
    }
    request.user = { id: userId };
    next();
  } catch {
    throw new AppError('Invalid token!', 401);
  }
}

export { ensureAuthenticated };
