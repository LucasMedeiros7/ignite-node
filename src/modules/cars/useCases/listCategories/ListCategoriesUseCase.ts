import { inject, injectable } from 'tsyringe'
import { Category } from '../../entities/Category'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

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
