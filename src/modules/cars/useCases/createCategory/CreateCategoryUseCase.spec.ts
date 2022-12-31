// import { CreateCategoryUseCase } from './CreateCategoryUseCase'

describe('Create Category', () => {
  it('should be able to create a new category', () => {
    // const createCategory = new CreateCategoryUseCase()
    const category = {
      name: 'Categoria Qualquer',
      description: 'Qualquer uma'
    }

    expect(category).toEqual({
      name: 'Categoria Qualquer',
      description: 'Qualquer uma'
    })
  })
})
