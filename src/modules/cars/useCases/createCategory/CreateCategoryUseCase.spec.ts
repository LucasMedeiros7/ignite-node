import { AppError } from '@errors/AppError'
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

  it('should not be able to create a new category with an existing name', async () => {
    const existingCategoryPayload = {
      name: 'Categoria Existente',
      description: 'Já existe'
    }
    const duplicateCategoryPayload = {
      name: 'Categoria Existente',
      description: 'Tentando duplicar'
    }

    await createCategory.execute(existingCategoryPayload)

    expect(async () => await createCategory.execute(duplicateCategoryPayload)).rejects.toBeInstanceOf(AppError)
  })
})
