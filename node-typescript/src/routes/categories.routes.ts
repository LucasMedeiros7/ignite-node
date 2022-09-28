import { Router } from 'express';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  return response.status(201).json({  });
});

export { categoriesRoutes };
