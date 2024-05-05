import { comparePasswords, generateToken } from '@/lib/utils';
import { PrismaClient } from '@prisma/client';

export async function POST(req: Request) {
  try {
    const prisma = new PrismaClient();
    const body = await req.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return Response.json({ message: 'User not found' }, { status: 404, statusText: 'Not found' });
    }

    const passwordsMatch = await comparePasswords(password, user.password);

    if (!passwordsMatch) {
      return Response.json({ message: 'Invalid password' }, { status: 401, statusText: 'Unauthorized' });
    }

    const token = generateToken({ id: user.id });

    return Response.json({ token }, { status: 201 });
  } catch (error) {
    return Response.json(error, { status: 405 });
  }
}
