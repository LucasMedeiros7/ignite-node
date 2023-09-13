import { inject, injectable } from 'tsyringe'
import { AppError } from '@shared/errors/AppError'
import { SpecificationRepository } from '../../repositories/SpecificationsRepository.interface'

interface CreateSpecificationRequest {
  name: string
  description: string
}

@injectable()
export class CreateSpecificationUseCase {
  constructor (
    @inject('ISpecificationRepository')
    private readonly specificationRepository: SpecificationRepository
  ) {}

  async execute ({ name, description }: CreateSpecificationRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name)
    if (specificationAlreadyExists) {
      throw new AppError('This specification already exists')
    }
    await this.specificationRepository.create({ name, description })
  }
}
