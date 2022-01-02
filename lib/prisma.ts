//So far, the GraphQL API returns hardcoded data in the resolvers function. You will use Prisma Client in these functions to send queries to the database.

//Prisma Client is an auto-generated, type-safe, query builder. To be able to use it in your project, you should instantiate it once and then reuse it across the entire project.
import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
export default prisma;
