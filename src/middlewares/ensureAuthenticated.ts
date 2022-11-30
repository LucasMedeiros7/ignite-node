import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '../modules/accounts/repositories/implementations/UserRepository';

interface TokenPayload {
  sub: string;
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;
  if (!authorization) {
    throw new Error('Token missing!');
  }
  const token = authorization.split(' ')[1];
  const secret = '3e44cae1aa332b5813823f09f7c85bd8';
  try {
    const { sub: userId } = verify(token, secret) as TokenPayload;
    const userRepository = new UserRepository();
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new Error('User does not exists!');
    }
    next();
  } catch {
    throw new Error('Invalid token!');
  }
}

export { ensureAuthenticated };
