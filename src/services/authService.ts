import { setSession } from '@/app/lib';
import { Errors } from '@/constants/errors';
import { comparePasswords, generateToken } from '@/lib/utils';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

export async function loginUser(email: string, password: string) {
  try {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) throw new Error(Errors.USER_NOT_FOUND);

    const passwordMatch = await comparePasswords(password, user.password);
    if (!passwordMatch) throw new Error(Errors.INVALID_PASSWORD);

    const token = generateToken({ id: user.id, email: user.email, username: user.username });

    setSession(token);

    return token;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username: string, email: string, password: string) {
  const prisma = new PrismaClient();
  const existingUser = await prisma.user.findUnique({ where: { email } });
  try {
    if (existingUser) throw new Error(Errors.USER_ALREADY_EXIST);

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
        city: '',
        state: '',
        phoneNumber: '',
        profilePic: '',
        fullName: ''
      } as any
    });

    const token = generateToken({ id: newUser.id, email: newUser.email, username: newUser.username });

    setSession(token);

    return token;
  } catch (error) {
    throw error;
  }
}
