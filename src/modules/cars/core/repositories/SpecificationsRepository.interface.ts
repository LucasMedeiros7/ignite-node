import { Specification } from '../../storage/typeorm/models/Specifications.model'
import { CreateSpecificationDTO } from '../dtos/CreateSpecificationDTO'

export interface SpecificationRepository {
  create: ({ name, description }: CreateSpecificationDTO) => Promise<void>
  findByName: (name: string) => Promise<Specification | null>
}
