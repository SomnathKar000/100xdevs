import { z } from "zod";

const signupInput = z.object({
  username: z.string().min(2, { message: "Not a valid username" }),
  password: z.string().min(2, { message: "Not a valid password" }),
});

export { signupInput };
