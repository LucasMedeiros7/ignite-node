import { Car } from '@modules/cars/storage/typeorm/models/Car.model'
import { CreateCarDTO } from '../dtos/CreateCarDTO'

export interface CarsRepository {
  create: (data: CreateCarDTO) => Promise<Car>
  findByLicensePlate: (licensePlate: string) => Promise<Car | undefined>
  findAvailables: () => Promise<Car[]>
}
