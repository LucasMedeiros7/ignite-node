import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { ListCategoriesUseCase } from '@modules/cars/core/useCases/ListCategories.useCase'

export class ListCategoriesController {
  async handle (_request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
    const allCategories = await listCategoriesUseCase.execute()
    return response.json(allCategories)
  }
}
