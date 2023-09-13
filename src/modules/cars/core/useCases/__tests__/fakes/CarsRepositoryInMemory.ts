import { CreateCarDTO } from '@modules/cars/core/dtos/CreateCarDTO'
import { CarsRepository } from '@modules/cars/core/repositories/CarsRepository'
import { Car } from '@modules/cars/storage/typeorm/models/Car.model'

export class CarsRepositoryInMemory implements CarsRepository {
  private readonly cars: Car[]

  constructor () {
    this.cars = []
  }

  async findByLicensePlate (licensePlate: string): Promise<Car | undefined> {
    return this.cars.find(car => car.license_plate === licensePlate)
  }

  async create (data: CreateCarDTO): Promise<Car> {
    const car = new Car()
    Object.assign(car, { ...data })
    this.cars.push(car)
    return car
  }
}
