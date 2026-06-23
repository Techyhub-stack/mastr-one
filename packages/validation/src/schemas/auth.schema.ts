import { z } from "zod";

export const signUpSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1)
});

export const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(8)
});