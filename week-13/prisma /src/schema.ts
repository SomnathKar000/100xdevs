import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$queryRaw`CREATE DATABASE prisma_test_3`;
}

main()
  .then(async () => {
    console.log("Executed successfully");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("Got an error ", e);
    await prisma.$disconnect();
  });
