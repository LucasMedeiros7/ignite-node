import { ISpecificationRepository } from '../../repositories/ISpecificationsRepository'
import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppError'
interface IRequest {
  name: string
  description: string
}

@injectable()
export class CreateSpecificationUseCase {
  constructor (
    @inject('SpecificationRepository')
    private readonly specificationRepository: ISpecificationRepository
  ) {}

  async execute ({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name)
    if (specificationAlreadyExists) {
      throw new AppError('This specification already exists')
    }
    await this.specificationRepository.create({ name, description })
  }
}
