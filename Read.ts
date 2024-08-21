import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function read(criterion) {
  criterion = "where: {id: lte 1}"
  const users = await prisma.visitantes.findMany(criterion);
}

export{read}