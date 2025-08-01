import express from "express";
import { z } from "zod";

const app = express();

app.use(express.json());

const UserProfileSchema = z.object({
  name: z.string().min(3, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(8, { message: "Password must contain minimum 8 characters" }),
  age: z
    .number()
    .min(18, { message: "Age must be greater than 18" })
    .optional(),
});

app.get("health", (req, res) => {
  res.json({
    status: true,
    message: "Working fine!",
  });
});

app.put("/user", (req, res) => {
  const { success, error } = UserProfileSchema.safeParse(req.body);

  if (!success) {
    res.status(411).json({
      status: false,
      message: error?.message,
    });
    return;
  }
  const userData = req.body;
  res.json({
    status: true,
    message: "User created successFully",
    user: userData,
  });
});

app.listen(8000);
