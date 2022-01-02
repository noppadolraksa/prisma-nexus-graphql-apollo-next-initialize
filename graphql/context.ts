//The next step is to create a context so that the resolvers have access to the Prisma Client and be able send queries to the database.

import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";

export type Context = {
  prisma: PrismaClient;
};
export async function createContext({ req, res }): Promise<Context> {
  return {
    prisma,
  };
}
