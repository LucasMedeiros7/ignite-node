import multer from 'multer'
import { randomBytes } from 'node:crypto'
import { resolve } from 'node:path'

export default {
  upload (folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename: (_request, file, callback) => {
          const fileHash = randomBytes(16).toString('hex')
          const fileName = `${fileHash}-${file.originalname}`
          return callback(null, fileName)
        }
      })
    }
  }
}
