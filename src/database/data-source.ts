import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/Category';
import { CreateCategories1669298947615 } from './migrations/1669298947615-CreateCategories';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'rentx',
  synchronize: false,
  logging: false,
  entities: [Category],
  migrations: [CreateCategories1669298947615]
});

export function createConnection(host = 'database'): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}
export default AppDataSource;
