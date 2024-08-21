import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function Delete(id)  {
    let motorista: Prisma.visitantesCreateInput
  
    const deleteVisitantes = await prisma.visitantes.delete(id);
}

export{Delete}