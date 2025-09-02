import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

import { PrismaClient } from "./generated/prisma";

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

if (!process.env.DATABASE_URL) {
    dotenv.config({ path: path.join(__dirname, '../../../.env') });
}

if (!process.env.DATABASE_URL) {
    dotenv.config({ path: path.join(process.cwd(), '../../.env') });
}


const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;