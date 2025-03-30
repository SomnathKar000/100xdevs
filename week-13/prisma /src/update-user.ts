import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Your code

  await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: "Somnath Kar",
    },
  });
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
