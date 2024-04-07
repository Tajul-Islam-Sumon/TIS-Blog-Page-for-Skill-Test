import { PrismaClient } from "@prisma/client";

const GlobalPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = GlobalPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') GlobalPrisma.prisma;

export default prisma;