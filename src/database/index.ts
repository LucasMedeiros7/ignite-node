import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/model/Category';
import { Specification } from '../modules/cars/model/Specifications';

export const dataSource = new DataSource({
  type: 'postgres',
  host: "localhost",
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  entities: [Category, Specification],
});
