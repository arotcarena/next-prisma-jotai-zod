import { PrismaClient } from "../generated/prisma"

declare global {
  // Permet d'éviter les multiples instanciations en dev
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ||
  new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
