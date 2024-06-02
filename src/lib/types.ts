import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  username: z
    .string()
    .min(6, { message: 'Must be at least 6 characters' })
    .optional(),
  password: z.string().min(6, { message: 'Must be at least 6 characters' })
});
