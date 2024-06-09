import express from "express";
import { z } from "zod";

const app = express();

app.use(express.json());

const userValidator = z.object({
  userName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(5),
});

app.get("/health-check", (req, res) => {
  res.status(200).json({
    success: true,
    message: "the app is ready ",
  });
});

app.post("/user", (req, res) => {
  const user = req.body.user;
  const validate = userValidator.safeParse(user);
  if (!validate.success) {
    return res.status(403).json({
      message: "validation error",
      error: validate.error,
    });
  }
  res.status(200).json({
    success: true,
    message: "user created successfully",
  });
});

app.listen(8000, () => console.log("app is listening "));
