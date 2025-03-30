import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  // Your code

  await prisma.user.create({
    data: {
      name: "gmail user",
      email: "test@gmail.com",
      password: "12345678",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Successfully Executed");
  })
  .catch(async (e) => {
    console.log("got an error ", e);
    await prisma.$disconnect();

    process.exit(1);
  });
