import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { CreateCategoryUseCase } from '@modules/cars/core/useCases/categories/CreateCategory.useCase'

export class CreateCategoryController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
    await createCategoryUseCase.execute({ name, description })
    return response.sendStatus(201)
  }
}
