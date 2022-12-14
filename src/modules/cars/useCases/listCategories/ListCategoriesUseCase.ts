import { Category } from '../../entities/Category'
import { inject, injectable } from 'tsyringe'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

@injectable()
export class ListCategoriesUseCase {
  constructor (
    @inject('CategoriesRepository')
    private readonly categoriesRepository: ICategoriesRepository
  ) {}

  async execute (): Promise<Category[]> {
    const categories = await this.categoriesRepository.list()
    return categories
  }
}
