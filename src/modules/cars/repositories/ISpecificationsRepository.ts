import { Specification } from '../entities/Specifications';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ICreateSpecificationDTO, ISpecificationRepository };
