import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'], // 4 do all query in database
})
