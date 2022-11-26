import 'reflect-metadata';
import './shared/container';

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';

import swaggerFile from './swagger.json';
import { createConnection } from './database/data-source';

createConnection();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
