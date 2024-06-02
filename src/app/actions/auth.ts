'use server';

import { Errors } from '@/constants/errors';
import prisma from '@/db';
import { comparePasswords, generateToken } from '@/lib/utils';
import { setSession } from '../lib';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) throw new Error(Errors.USER_NOT_FOUND);

    const passwordMatch = await comparePasswords(password, user.password);
    if (!passwordMatch) throw new Error(Errors.INVALID_PASSWORD);

    const token = await generateToken({
      id: user.id,
      email: user.email,
      username: user.username
    });

    setSession(token);

    return token;
  } catch (error: any) {
    throw error;
  }
}
