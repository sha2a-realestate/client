import { comparePasswords, generateToken } from '@/lib/utils';
import { PrismaClient } from '@prisma/client';

export async function POST(req: Request) {
  try {
    const prisma = new PrismaClient();
    const body = await req.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return new Response('User not found', { status: 404 });
    }

    const passwordsMatch = await comparePasswords(password, user.password);

    if (!passwordsMatch) {
      return new Response('Invalid password', { status: 401 });
    }

    const token = generateToken({ id: user.id });

    return Response.json({ token }, { status: 201 });
  } catch (error) {
    return Response.json(error, { status: 405 });
  }
}
