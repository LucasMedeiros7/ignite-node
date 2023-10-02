import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { ImportCategoryUseCase } from '@modules/cars/core/useCases/categories/ImportCategory.useCase'

export class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const file = request.file as Express.Multer.File
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase)
    await importCategoryUseCase.execute(file)
    return response.sendStatus(201)
  }
}
