import z from "zod";

const signupValidation = z.object({
  name: z.string().min(3).optional(),
  email: z.email(),
  password: z.string().min(4),
});

const signinValidation = z.object({
  email: z.email(),
  password: z.string().min(4),
});

export { signupValidation, signinValidation };
