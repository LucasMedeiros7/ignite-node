/* eslint-disable @typescript-eslint/explicit-function-return-type */
import fs from 'node:fs'

export async function deleteFile (filename: string) {
  try {
    await fs.promises.stat(filename)
  } catch {
    return
  }
  await fs.promises.unlink(filename)
}
