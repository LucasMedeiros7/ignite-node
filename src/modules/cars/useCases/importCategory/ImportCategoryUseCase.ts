import fs from 'fs'
import { inject, injectable } from 'tsyringe'
import { parse as csvParse } from 'csv-parse'
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'

interface IImportCategory {
  name: string
  description: string
}

@injectable()
export class ImportCategoryUseCase {
  constructor (
    @inject('ICategoriesRepository')
    private readonly categoriesRepository: ICategoriesRepository
  ) {}

  private async loadCategories (file: Express.Multer.File): Promise<IImportCategory[]> {
    return await new Promise((resolve, reject) => {
      const categories: IImportCategory[] = []
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

  async execute (file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)
    for (const category of categories) {
      const { name, description } = category
      const existCategory = await this.categoriesRepository.findByName(
        category.name
      )
      if (!existCategory) {
        await this.categoriesRepository.create({ name, description })
      }
    }
  }
}
