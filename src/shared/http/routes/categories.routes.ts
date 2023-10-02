import multer from 'multer'
import { Router } from 'express'
import { CreateCategoryController } from '@modules/cars/http/categories/CreateCategory.controller'
import { ImportCategoryController } from '@modules/cars/http/categories/ImportCategory.controller'
import { ListCategoriesController } from '@modules/cars/http/categories/ListCategories.controller'

const categoriesRoutes = Router()
const upload = multer({ dest: './tmp' })

const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()
const listCategoriesController = new ListCategoriesController()

categoriesRoutes.post('/', createCategoryController.handle)
categoriesRoutes.get('/', listCategoriesController.handle)
categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
)

export { categoriesRoutes }
