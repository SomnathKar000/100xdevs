import { Hono } from "hono";
import { sign } from "hono/jwt";
import { getPrismaClient } from "../utils/prismaClient";
import { signupValidation, signinValidation } from "../validations/user";

const userRoute = new Hono<{
  Bindings: {
    JWT_SECRET: string;
  };
}>();

userRoute.post("/signup", async (c) => {
  const prisma = getPrismaClient(c);

  const body = await c.req.json();

  const { success } = signupValidation.safeParse(body);

  if (!success) {
    c.status(403);
    return c.json({
      message: "Invalid credentials",
    });
  }

  try {
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
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Error while creating an user",
    });
  }
});

userRoute.post("/signin", async (c) => {
  const prisma = getPrismaClient(c);

  const body = await c.req.json();

  const { success } = signinValidation.safeParse(body);

  if (!success) {
    c.status(403);
    return c.json({
      message: "Invalid credentials",
    });
  }

  try {
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
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Error while getting the user data",
    });
  }
});

export { userRoute };
