import { Category } from '@modules/cars/storage/typeorm/models/Category.model'
import { CreateCategoryDTO } from '../dtos/CreateCategoryDTO'

export interface CategoriesRepository {
  findByName: (name: string) => Promise<Category>
  list: () => Promise<Category[]>
  create: ({ name, description }: CreateCategoryDTO) => Promise<void>
}
