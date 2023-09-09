import 'reflect-metadata'
import { DataSource } from 'typeorm'

const databaseHost = process.env.DATABASE_HOST ?? 'localhost'
const AppDataSource = new DataSource({
  type: 'postgres',
  host: databaseHost,
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'rentx',
  synchronize: false,
  logging: true,
  entities: ['src/**/models/*.ts'],
  migrations: ['src/**/migrations/*.ts']
})

export async function createConnection (): Promise<void> {
  AppDataSource.setOptions({ host: databaseHost })
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!')
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err)
    })
}

export default AppDataSource
