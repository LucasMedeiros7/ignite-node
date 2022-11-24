import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/Category';
import { CreateCategories1669298947615 } from './migrations/1669298947615-CreateCategories';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'rentx',
  synchronize: false,
  logging: false,
  entities: [Category],
  migrations: [CreateCategories1669298947615]
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
