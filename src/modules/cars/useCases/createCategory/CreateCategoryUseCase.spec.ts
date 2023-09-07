import { CategoryRepositoryInMemory } from '../../repositories/implementations/CategoriesRepositoryInMemory'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

describe('Create Category', () => {
  let categoriesRepositoryInMemory: CategoryRepositoryInMemory
  let createCategory: CreateCategoryUseCase

  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoryRepositoryInMemory()
    createCategory = new CreateCategoryUseCase(categoriesRepositoryInMemory)
  })

  it('should be able to create a new category', async () => {
    const categoryPayload = {
      name: 'Categoria Qualquer',
      description: 'Qualquer uma'
    }

    await createCategory.execute(categoryPayload)
    const categoryCreated = await categoriesRepositoryInMemory.findByName('Categoria Qualquer')

    expect(categoryCreated).toHaveProperty('id')
    expect(categoryCreated.name).toBe(categoryPayload.name)
    expect(categoryCreated.description).toBe(categoryPayload.description)
  })
})
