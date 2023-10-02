import { container } from 'tsyringe'

import { TypeORMUserRepository } from '@modules/accounts/storage/typeorm/repositories/TypeORMUserRepository'
import { TypeORMCategoriesRepository } from '@modules/cars/storage/typeorm/repositories/TypeORMCategoriesRepository'
import { TypeORMSpecificationRepository } from '@modules/cars/storage/typeorm/repositories/TypeORMSpecificationsRepository'
import { TypeORMCarsRepository } from '@modules/cars/storage/typeorm/repositories/TypeORMCarsRepository'

container.register('CategoriesRepository', {
  useClass: TypeORMCategoriesRepository,
})
container.register('SpecificationRepository', {
  useClass: TypeORMSpecificationRepository,
})
container.register('UserRepository', { useClass: TypeORMUserRepository })
container.register('CarsRepository', { useClass: TypeORMCarsRepository })
