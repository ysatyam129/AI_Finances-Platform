import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}