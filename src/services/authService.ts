import { Errors } from '@/constants/errors';
import { comparePasswords, generateToken } from '@/lib/utils';
import { PrismaClient } from '@prisma/client';

export async function loginUser(email: string, password: string) {
  try {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) throw new Error(Errors.USER_NOT_FOUND);

    const passwordMatch = await comparePasswords(password, user.password);
    if (!passwordMatch) throw new Error(Errors.INVALID_PASSWORD);

    const token = generateToken({ id: user.id });

    return token;
  } catch (error) {
    throw error;
  }
}
