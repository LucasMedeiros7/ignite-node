import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'
import { CategoriesRepository } from '../../repositories/CategoriesRepository.interface'

interface CreateCategoryRequest {
  name: string
  description: string
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private readonly categoriesRepository: CategoriesRepository,
  ) {}

  async execute({ name, description }: CreateCategoryRequest): Promise<void> {
    const categoryAlreadyExists =
      await this.categoriesRepository.findByName(name)
    if (categoryAlreadyExists) {
      throw new AppError('Category already exists')
    }
    await this.categoriesRepository.create({ name, description })
  }
}
