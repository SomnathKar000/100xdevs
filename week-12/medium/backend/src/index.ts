import { Context, Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

function getPrismaClient(c: Context) {
  return new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
}

app.post("/api/v1/signup", async (c) => {
  const prisma = getPrismaClient(c);

  const body = await c.req.json();

  if (!body.email || !body.password) {
    c.status(404);
    return c.json({
      message: "Invalid credentials",
    });
  }

  const userData = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });

  const token = await sign({ id: userData.id }, c.env.JWT_SECRET);

  return c.json({
    token,
  });
});

app.post("/api/v1/signin", async (c) => {
  const prisma = getPrismaClient(c);

  const body = await c.req.json();

  if (!body.email || !body.password) {
    c.status(404);
    return c.json({
      message: "Invalid credentials",
    });
  }

  const userData = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!userData) {
    c.status(403);
    return c.json({
      message: "User not found",
    });
  }

  const token = await sign({ id: userData.id }, c.env.JWT_SECRET);

  return c.json({
    token,
  });
});

app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  return c.text("get blog route");
});

app.post("/api/v1/blog", (c) => {
  return c.text("signin route");
});

app.put("/api/v1/blog", (c) => {
  return c.text("signin route");
});

export default app;
