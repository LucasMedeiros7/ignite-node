import { Car } from '@modules/cars/storage/typeorm/models/Car.model'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'
import { CreateCarDTO } from '../../dtos/CreateCarDTO'
import { CarsRepository } from '../../repositories/CarsRepository'

@injectable()
export class CreateCarUseCase {
  constructor (
    @inject('CarsRepository')
    private readonly carsRepository: CarsRepository
  ) { }

  async execute (carData: CreateCarDTO): Promise < Car > {
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(carData.license_plate)
    if (carAlreadyExists) {
      throw new AppError('A car with this license plate already exists!')
    }
    const car = await this.carsRepository.create({ ...carData })
    return car
  }
}
