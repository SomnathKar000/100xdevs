import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      first_name: "Som",
      last_name: "Kar",
      email: "test@test.com",
      password: "12345678",
    },
  });
}

main()
  .then(async () => {
    console.log("Executed successfully");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Got an error ", e);
    await prisma.$disconnect();
  });
