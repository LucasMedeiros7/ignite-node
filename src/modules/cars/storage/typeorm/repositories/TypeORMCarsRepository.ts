import { Repository } from 'typeorm'
import { Car } from '../models/Car.model'
import AppDataSource from '@shared/infra/typeorm/data-source'
import { CreateCarDTO } from '@modules/cars/core/dtos/CreateCarDTO'
import { CarsRepository } from '@modules/cars/core/repositories/CarsRepository'

export class TypeORMCarsRepository implements CarsRepository {
  private readonly repository: Repository<Car>

  constructor () {
    this.repository = AppDataSource.getRepository(Car)
  }

  async create (data: CreateCarDTO): Promise<Car> {
    const car = this.repository.create({ ...data })
    await this.repository.save(car)
    return car
  }

  async findByLicensePlate (licensePlate: string): Promise<Car | undefined> {
    const car = await this.repository.findOneBy({ license_plate: licensePlate })
    if (car) return car
  }

  async findAvailables (): Promise<Car[]> {
    const cars = await this.repository.find({ where: { available: true } })
    return cars
  }
}
