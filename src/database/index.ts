import { DataSource } from 'typeorm';
const dataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  entities: [
    // Category
    // ...
  ],
  migrations: [
    // CreateCategories1616082124654
    // ...
  ]
});
