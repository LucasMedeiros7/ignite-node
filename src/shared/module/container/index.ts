import { container } from 'tsyringe'

import { TypeORMUserRepository } from '@modules/accounts/storage/typeorm/repositories/TypeORMUserRepository'
import { TypeORMCategoriesRepository } from '@modules/cars/storage/typeorm/repositories/TypeORMCategoriesRepository'
import { TypeORMSpecificationRepository } from '@modules/cars/storage/typeorm/repositories/TypeORMSpecificationsRepository'

container.register('ICategoriesRepository', { useClass: TypeORMCategoriesRepository })
container.register('ISpecificationRepository', { useClass: TypeORMSpecificationRepository })
container.register('IUserRepository', { useClass: TypeORMUserRepository })
