import 'reflect-metadata'
import { AppError } from '@shared/errors/AppError'
import { CarsRepository } from '../../repositories/CarsRepository'
import { CreateCarUseCase } from '../car/CreateCar.useCase'
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
    category_id: 'category'
  }

  beforeEach(() => {
    carRepository = new CarsRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carRepository)
  })

  it('should be able to create a new car', async () => {
    await createCarUseCase.execute(newCar)
    const carCreated = await carRepository.findByLicensePlate(newCar.license_plate)
    expect(carCreated?.license_plate).toBe('FAKE-1234')
  })

  it('should not be able to create a new car with an existing license plate', async () => {
    await createCarUseCase.execute(newCar)
    await expect(createCarUseCase.execute(newCar)).rejects.toThrow(AppError)
  })
})
