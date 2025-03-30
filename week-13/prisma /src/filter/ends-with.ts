import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Your code

  const users = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "email.com",
      },
      posts: {
        some: {
          published: false,
        },
      },
    },
    include: {
      posts: true,
    },
  });
  console.log("All Users with email ", users);
}

main()
  .then(async () => {
    console.log("Filtering is executed successfully");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("Got an error", e);
    prisma.$disconnect();
  });
