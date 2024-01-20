import { z } from "zod";

export const SignUpSchema = z.object({
    name: z.string().min(1, {message: "Name is required"}),
    email: z.string().email().min(1, {message: "Email is required"}),
    password: z.string().min(8, "The password must be more than 8 characters"),
  });
  
export type TNormalForm = z.infer<typeof SignUpSchema>