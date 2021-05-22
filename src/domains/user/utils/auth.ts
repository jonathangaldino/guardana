import { pbkdf2Sync } from 'crypto'

export const hashPassword = (unhashedPassword: string): string =>
  pbkdf2Sync(unhashedPassword, 'salt', 1000, 64, `sha512`).toString(`hex`)
