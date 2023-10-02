import { CreateSpecificationUseCase } from '@modules/cars/core/useCases/specifications/CreateSpecification.useCase'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body
    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase,
    )
    await createSpecificationUseCase.execute({ name, description })
    return response.sendStatus(201)
  }
}
