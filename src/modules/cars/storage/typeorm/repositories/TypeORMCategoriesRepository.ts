import { Repository } from 'typeorm'
import { Category } from '../models/Category.model'
import AppDataSource from '@shared/infra/typeorm/data-source'
import { CreateCategoryDTO } from '@modules/cars/core/dtos/CreateCategoryDTO'
import { CategoriesRepository } from '@modules/cars/core/repositories/CategoriesRepository.interface'

export class TypeORMCategoriesRepository implements CategoriesRepository {
  private readonly repository: Repository<Category>

  constructor() {
    this.repository = AppDataSource.getRepository(Category)
  }

  async create({ name, description }: CreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ description, name })
    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string): Promise<Category> {
    const category = (await this.repository.findOneBy({ name })) as Category
    return category
  }
}
