import { z } from "zod";

const todo = z.object({
  title: z.string().min(2, { message: "Not an valid title" }),
  description: z.string().min(3, { message: "Not an valid description" }),
});

export { todo };
