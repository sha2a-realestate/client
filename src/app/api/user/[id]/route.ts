import { ErrorStatus, Errors } from '@/constants/errors';
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json();
  const { firstName, secondName, phoneNumber, country, state, email } = body;

  const userId = params.id;

  const prisma = new PrismaClient();
  const existingUser = await prisma.user.findUnique({ where: { id: userId, email } });
  try {
    if (!existingUser) throw new Error(Errors.USER_NOT_FOUND);

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { secondName, phoneNumber, country, state, firstName }
    });

    return Response.json({ user: updatedUser }, { status: 200 });
  } catch (error: any) {
    let errorCode = 'Updating user data failed';
    let errorStatus = ErrorStatus.InternalServerError;
    console.log(error);

    if (error.message === Errors.USER_NOT_FOUND) {
      errorCode = Errors.USER_NOT_FOUND;
      errorStatus = ErrorStatus.NotFound;
    }

    return Response.json({ errorCode }, { status: errorStatus });
  }
}
