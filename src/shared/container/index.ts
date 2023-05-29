import { container } from 'tsyringe'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository'
import { UserRepository } from '../../modules/accounts/repositories/implementations/UserRepository'

container.register('ICategoriesRepository', { useClass: CategoriesRepository })
container.register('ISpecificationRepository', { useClass: SpecificationRepository })
container.register('IUserRepository', { useClass: UserRepository })
