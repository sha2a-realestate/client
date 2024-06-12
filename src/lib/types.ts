import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  username: z.string().min(6, { message: 'Must be at least 6 characters' }).optional(),
  password: z.string().min(6, { message: 'Must be at least 6 characters' })
});

export const CompletePersonalInfoSchema = z.object({
  firstName: z.string().min(1, 'This field is required'),
  secondName: z.string().min(1, 'This field is required'),
  phoneNumber: z
    .string()
    .regex(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Invalid phone number.'
    ),
  country: z.string().min(1, 'This field is required'),
  state: z.string().min(1, 'This field is required')
});

export type CompletePersonalInfo = z.infer<typeof CompletePersonalInfoSchema>;
