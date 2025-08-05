import { z } from "zod";

const signupInput = z.object({
  username: z.string().min(2, { message: "Not a valid username" }),
  password: z.string().min(2, { message: "Not a valid password" }),
});

const todo = z.object({
  title: z.string().min(2, { message: "Not an valid title" }),
  description: z.string().min(3, { message: "Not an valid description" }),
});

type SignUpType = z.infer<typeof signupInput>;
type Todo = z.infer<typeof todo>;

export {
  // validators
  signupInput,
  todo,

  // Types
  SignUpType,
  Todo,
};
