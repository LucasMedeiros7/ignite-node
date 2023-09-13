import { Car } from '@modules/cars/storage/typeorm/models/Car.model'
import { CreateCarDTO } from '../dtos/CreateCarDTO'

export interface CarsRepository {
  create: (data: CreateCarDTO) => Promise<void>
  findByLicensePlate: (licensePlate: string) => Promise<Car | undefined>
}
