import 'reflect-metadata'
import { CarsRepository } from '../../repositories/CarsRepository'
import { CreateCarUseCase } from '../cars/CreateCar.useCase'
import { CarsRepositoryInMemory } from './fakes/CarsRepositoryInMemory'
import { ListAvailableCarsUseCase } from '../cars/ListAvailableCars.useCase'

describe('Create Car', () => {
  let createCarUseCase: CreateCarUseCase
  let carRepository: CarsRepository
  let listAvailableCarsUseCase: ListAvailableCarsUseCase

  beforeEach(async () => {
    carRepository = new CarsRepositoryInMemory()
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carRepository)
    createCarUseCase = new CreateCarUseCase(carRepository)

    const CARS_QUANTITIES = 5
    await seedCarsRepository(CARS_QUANTITIES)
  })

  async function seedCarsRepository(carsQuantities = 2): Promise<void> {
    let counter = 0
    while (carsQuantities > counter) {
      await createCarUseCase.execute({
        name: `fake_car_name-${counter}`,
        description: `fake_description-${counter}`,
        daily_rate: 100 + counter,
        license_plate: `FAKE-1234-${counter}`,
        fine_amount: 60 + counter,
        brand: `fake_brand-${counter}`,
        category_id: `category-${counter}`,
      })
      counter++
    }
  }

  it('should be possible to list all available cars', async () => {
    const cars = await listAvailableCarsUseCase.execute()
    expect(cars).toHaveLength(5)
  })
})
