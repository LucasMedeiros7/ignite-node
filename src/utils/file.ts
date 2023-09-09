import fs from 'node:fs'

export async function deleteFile (filename: string): Promise<any> {
  try {
    await fs.promises.stat(filename)
  } catch {
    return
  }
  await fs.promises.unlink(filename)
}
