import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  // Your code

  // For getting all users
  const users = await prisma.user.findMany({});
  console.log("ALL users ", users);

  // For getting single user
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });

  console.log("Single user data ", user);
}

main()
  .then(async () => {
    console.log("Executed successfully");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("Got an error ", e);
    await prisma.$connect();
  });
