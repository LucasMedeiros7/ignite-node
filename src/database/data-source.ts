import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/Category';
import { Specification } from '../modules/cars/entities/Specifications';
import { CreateCategories1669298947615 } from './migrations/1669298947615-CreateCategories';
import { CreateSpecifications1669477930736 } from './migrations/1669477930736-CreateSpecifications';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'rentx',
  synchronize: false,
  logging: false,
  entities: ["src/**/entities/*.ts"],
  migrations: ["src/**/migrations/*.ts"]
});

export async function createConnection(host = 'database'): Promise<void> {
  AppDataSource.setOptions({ host }).initialize()
    .then(() => {
      console.log("Data Source has been initialized!")
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err)
    });
}

export default AppDataSource;
