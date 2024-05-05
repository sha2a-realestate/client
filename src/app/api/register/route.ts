// import prisma from '@/lib/prisma';
import { generateToken } from '@/lib/utils';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

export async function POST(request: Body) {
  const prisma = new PrismaClient();
  const body = await request.json();
  const { email, password, username } = body;
  const existingUser = await prisma.user.findUnique({ where: { username, email } });

  try {
    if (existingUser) {
      return new Response('Username already exists', { status: 400 });
    }

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

    const token = generateToken({ id: newUser.id });

    // set bearer token in cookies and expiry date
    cookies().set('access-token', token, { expires: 1 * 60 * 60 });

    return Response.json({ token }, { status: 201 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
