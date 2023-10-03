import { inject, injectable } from 'tsyringe'
import { Category } from '@modules/cars/storage/typeorm/models/Category.model'
import { CategoriesRepository } from '../../repositories/CategoriesRepository.interface'

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject('ICategoriesRepository')
    private readonly categoriesRepository: CategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list()
    return categories
  }
}
