import { container } from 'tsyringe'

import { CategoriesRepository } from '@modules/cars/repositories/implementations/CategoriesRepository'
import { SpecificationRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository'
import { TypeORMUserRepository } from '@modules/accounts/storage/typeorm/repositories/TypeORMUserRepository'

container.register('ICategoriesRepository', { useClass: CategoriesRepository })
container.register('ISpecificationRepository', { useClass: SpecificationRepository })
container.register('IUserRepository', { useClass: TypeORMUserRepository })
