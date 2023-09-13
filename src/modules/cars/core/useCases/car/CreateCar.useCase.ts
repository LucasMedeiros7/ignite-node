import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'
import { CarsRepository } from '../../repositories/CarsRepository'

interface CreateCarRequest {
  name: string
  description: string
  daily_rate: number
  license_plate: string
  fine_amount: number
  brand: string
  category_id: string
}

@injectable()
export class CreateCarUseCase {
  constructor (
    @inject('CarsRepository')
    private readonly carsRepository: CarsRepository
  ) {}

  async execute (createCarPayload: CreateCarRequest): Promise<void> {
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(createCarPayload.license_plate)
    if (carAlreadyExists) {
      throw new AppError('A car with this license plate already exists!')
    }
    await this.carsRepository.create(createCarPayload)
  }
}
