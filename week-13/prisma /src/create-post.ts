import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  //   Your code

  await prisma.post.create({
    data: {
      title: "unpublished Post",
      content: "Okay this is unpublished one",
      published: true,
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
}

main()
  .then(async () => {
    console.log("Post created successfully");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("Got an error ", e);
    await prisma.$disconnect();
  });
