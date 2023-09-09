import AppDataSource from '@shared/module/typeorm/data-source'
import { Repository } from 'typeorm'
import { Specification } from '../models/Specifications.model'
import { CreateSpecificationDTO } from '@modules/cars/core/dtos/CreateSpecificationDTO'
import { SpecificationRepository } from '@modules/cars/core/repositories/SpecificationsRepository.interface'

export class TypeORMSpecificationRepository implements SpecificationRepository {
  private readonly repository: Repository<Specification>

  constructor () {
    this.repository = AppDataSource.getRepository(Specification)
  }

  async create ({ name, description }: CreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({ name, description })
    await this.repository.save(specification)
  }

  async findByName (name: string): Promise<Specification | null> {
    const specification = await this.repository.findOneBy({ name })
    return specification
  }
}
