import { Category } from '../../../../storage/typeorm/models/Category.model'
import { CreateCategoryDTO } from '@modules/cars/core/dtos/CreateCategoryDTO'
import { CategoriesRepository } from '@modules/cars/core/repositories/CategoriesRepository.interface'

export class CategoryRepositoryInMemory implements CategoriesRepository {
  categories: Category[] = []

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find(
      (category) => category.name === name,
    ) as Category
    return category
  }

  async list(): Promise<Category[]> {
    const allCategories = this.categories
    return allCategories
  }

  async create({ name, description }: CreateCategoryDTO): Promise<void> {
    const category = new Category()
    Object.assign(category, {
      name,
      description,
    })
    this.categories.push(category)
  }
}
