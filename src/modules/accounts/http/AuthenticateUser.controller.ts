import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from '../core/usecases/AuthenticateUser.useCase'

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)
    const accessToken = await authenticateUserUseCase.execute({
      email,
      password,
    })
    return response.json(accessToken)
  }
}
