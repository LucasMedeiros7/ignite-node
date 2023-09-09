import { Repository } from 'typeorm'
import AppDataSource from '../../../../shared/module/typeorm/data-source'
import { Specification } from '../../models/Specifications'
import { ICreateSpecificationDTO, ISpecificationRepository } from '../ISpecificationsRepository'

export class SpecificationRepository implements ISpecificationRepository {
  private readonly repository: Repository<Specification>

  constructor () {
    this.repository = AppDataSource.getRepository(Specification)
  }

  async create ({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({ name, description })
    await this.repository.save(specification)
  }

  async findByName (name: string): Promise<Specification | null> {
    const specification = await this.repository.findOneBy({ name })
    return specification
  }
}
