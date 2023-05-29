import { delay, inject, injectable } from 'tsyringe'
import { Category } from '../../entities/Category'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

@injectable()
export class ListCategoriesUseCase {
  constructor (
    @inject(delay(() => CategoriesRepository))
    private readonly categoriesRepository: ICategoriesRepository
  ) {}

  async execute (): Promise<Category[]> {
    const categories = await this.categoriesRepository.list()
    return categories
  }
}
