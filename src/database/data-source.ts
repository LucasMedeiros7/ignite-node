import 'reflect-metadata'
import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'pass',
  database: 'rentx',
  synchronize: false,
  logging: true,
  entities: ['src/**/entities/*.ts'],
  migrations: ['src/**/migrations/*.ts']
})

export async function createConnection (host = 'database'): Promise<void> {
  AppDataSource.setOptions({ host })
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!')
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err)
    })
}

export default AppDataSource
