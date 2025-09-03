import { Hono } from "hono";
import { assignIfDefined } from "../utils/helper";
import { getPrismaClient } from "../utils/prismaClient";
import { verify } from "hono/jwt";

const blogRoutes = new Hono<{
  Bindings: {
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRoutes.use("/*", async (c, next) => {
  const token = c.req.header("authorization");
  if (!token) {
    c.status(403);
    return c.json({ message: "Unauthorized" });
  }
  try {
    const user = await verify(token, c.env.JWT_SECRET);
    if (
      user &&
      typeof user === "object" &&
      "id" in user &&
      typeof user.id === "string"
    ) {
      c.set("userId", user.id);
      return next();
    } else {
      c.status(403);
      return c.json({ message: "You are not authorized" });
    }
  } catch (error) {
    c.status(403);
    return c.json({
      message: "Verification failed",
    });
  }
});

blogRoutes.get("/bulk", async (c) => {
  const prisma = getPrismaClient(c);
  try {
    const blogs = await prisma.post.findMany();

    return c.json({
      message: "All blog data fetched successfully",
      data: blogs,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Error while getting all blog data",
    });
  }
});

blogRoutes.post("/", async (c) => {
  const userID = c.get("userId");

  const body = await c.req.json();

  if (!body?.title || !body?.content) {
    c.status(403);
    return c.json({
      message: "Invalid credentials",
    });
  }

  const prisma = getPrismaClient(c);

  try {
    const blogData = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userID,
        published: Boolean(body.published),
      },
    });

    return c.json({
      message: "Blog created successfully",
      blogData,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Error while creating a blog",
    });
  }
});

blogRoutes.get("/:id", async (c) => {
  const id = c.req.param("id");
  if (!id) {
    c.status(404);
    return c.json({
      message: "Id not found",
    });
  }

  const prisma = getPrismaClient(c);

  try {
    const blogData = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (!blogData) {
      c.status(404);
      return c.json({
        message: "Blog not found",
      });
    }

    return c.json({
      message: "Blog data found successfully",
      data: blogData,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Error while getting the blog data",
    });
  }
});

blogRoutes.put("/", async (c) => {
  const { title, published, content, id } = (await c.req.json()) ?? {};

  if (!id) {
    c.status(404);
    return c.json({
      message: "Id not found",
    });
  }
  if (!title && !content && !published) {
    c.status(403);
    return c.json({
      message: "Updated data not found",
    });
  }

  const prisma = getPrismaClient(c);
  const userId = c.get("userId");

  const data = {};
  assignIfDefined(data, "title", title);
  assignIfDefined(data, "content", content);
  assignIfDefined(data, "published", published);

  try {
    const blogData = await prisma.post.update({
      where: {
        id: id,
        authorId: userId,
      },
      data,
    });

    return c.json({
      message: "Data Updated successfully",
      blogData,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Error while updating the blog data",
    });
  }
});

export { blogRoutes };
