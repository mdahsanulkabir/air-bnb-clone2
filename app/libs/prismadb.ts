import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient();
//prevent new client creation due to hot reloading of Next-13

if(process.env.NODE_ENV !== 'production'){
    globalThis.prisma = client;
}

export default client;