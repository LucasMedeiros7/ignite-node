import { Car } from '@modules/cars/storage/typeorm/models/Car.model'
import { inject, injectable } from 'tsyringe'
import { CarsRepository } from '../../repositories/CarsRepository'

@injectable()
export class ListAvailableCarsUseCase {
  constructor (
    @inject('CarsRepository')
    private readonly carsRepository: CarsRepository
  ) { }

  async execute (): Promise<Car[]> {
    const cars = await this.carsRepository.findAvailables()
    return cars
  }
}
