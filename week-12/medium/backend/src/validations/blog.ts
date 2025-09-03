import z from "zod";

const createBlogValidation = z.object({
  title: z.string().min(3),
  content: z.string().min(5),
  published: z.boolean().optional(),
});

export { createBlogValidation };
