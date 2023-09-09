import { Category } from '@modules/cars/models/Category'
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ListCategoriesUseCase {
  constructor (
    @inject('ICategoriesRepository')
    private readonly categoriesRepository: ICategoriesRepository
  ) {}

  async execute (): Promise<Category[]> {
    const categories = await this.categoriesRepository.list()
    return categories
  }
}
