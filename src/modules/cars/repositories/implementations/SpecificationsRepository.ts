import { Repository } from 'typeorm';
import AppDataSource from '../../../../database/data-source';
import { Specification } from '../../entities/Specifications';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository
} from '../ISpecificationsRepository';

export class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({ name, description });
    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOneBy({ name });
    return specification;
  }
}
