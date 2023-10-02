import fs from 'fs'
import { inject, injectable } from 'tsyringe'
import { parse as csvParse } from 'csv-parse'
import { CategoriesRepository } from '../../repositories/CategoriesRepository.interface'

interface ImportCategoryRequest {
  name: string
  description: string
}

@injectable()
export class ImportCategoryUseCase {
  constructor(
    @inject('ICategoriesRepository')
    private readonly categoriesRepository: CategoriesRepository,
  ) {}

  private async loadCategories(
    file: Express.Multer.File,
  ): Promise<ImportCategoryRequest[]> {
    return await new Promise((resolve, reject) => {
      const categories: ImportCategoryRequest[] = []
      const stream = fs.createReadStream(file.path)
      const parseFile = csvParse()
      stream.pipe(parseFile)

      parseFile
        .on('data', async (line) => {
          const [name, description] = line
          categories.push({ name, description })
        })
        .on('end', () => {
          fs.promises.unlink(file.path)
          resolve(categories)
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)
    for (const category of categories) {
      const { name, description } = category
      const existCategory = await this.categoriesRepository.findByName(
        category.name,
      )
      if (!existCategory) {
        await this.categoriesRepository.create({ name, description })
      }
    }
  }
}
