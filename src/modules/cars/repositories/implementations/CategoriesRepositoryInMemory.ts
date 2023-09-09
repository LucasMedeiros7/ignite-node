import { Category } from '../../models/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository'

export class CategoryRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = []

  async findByName (name: string): Promise<Category> {
    const category = this.categories.find(category => category.name === name) as Category
    return category
  }

  async list (): Promise<Category[]> {
    const allCategories = this.categories
    return allCategories
  }

  async create ({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category()
    Object.assign(category, {
      name,
      description
    })
    this.categories.push(category)
  }
}
