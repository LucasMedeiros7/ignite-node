import 'reflect-metadata'
import { AppError } from '@shared/errors/AppError'
import { CarsRepository } from '../../repositories/CarsRepository'
import { CreateCarUseCase } from '../cars/CreateCar.useCase'
import { CarsRepositoryInMemory } from './fakes/CarsRepositoryInMemory'

describe('Create Car', () => {
  let createCarUseCase: CreateCarUseCase
  let carRepository: CarsRepository
  const newCar = {
    name: 'fake_car_name',
    description: 'fake_description',
    daily_rate: 100,
    license_plate: 'FAKE-1234',
    fine_amount: 60,
    brand: 'fake_brand',
    category_id: 'category',
  }

  beforeEach(() => {
    carRepository = new CarsRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carRepository)
  })

  it('should be able to create a new car', async () => {
    const carCreated = await createCarUseCase.execute(newCar)
    expect(carCreated?.license_plate).toBe('FAKE-1234')
  })

  it('should not be possible to register a car with an existing license plate', async () => {
    await createCarUseCase.execute({
      ...newCar,
      license_plate: 'DUPLICATE_LICENSE_PLATE',
    })
    await expect(
      createCarUseCase.execute({
        ...newCar,
        license_plate: 'DUPLICATE_LICENSE_PLATE',
      }),
    ).rejects.toThrow(AppError)
  })

  it('should be registered with available true by default.', async () => {
    const carCreated = await createCarUseCase.execute({
      ...newCar,
      name: 'FAKE_CAR_NAME_AVAILABLE',
    })
    expect(carCreated?.available).toBeTruthy()
  })
})
