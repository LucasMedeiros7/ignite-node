import { ISpecificationRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string
  description: string
}

export class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) { }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error('This specification already exists')
    }

    this.specificationRepository.create({ name, description })
  }
}
