'use server';

import { Errors } from '@/constants/errors';
import prisma from '@/db';

type UpdateUserData = {
  firstName: string;
  secondName: string;
  phoneNumber: string;
  country: string;
  state: string;
  userId: string;
  email: string;
};

export async function updateUser({
  email,
  firstName,
  secondName,
  phoneNumber,
  country,
  state,
  userId
}: UpdateUserData) {
  const existingUser = await prisma.user.findUnique({ where: { id: userId, email } });

  try {
    if (!existingUser) throw new Error(Errors.USER_NOT_FOUND);

    await prisma.user.update({
      where: { id: 'userId' },
      data: { firstName, secondName, phoneNumber, country, state }
    });
  } catch (error: any) {
    let errorCode = 'Updating user data failed';
    console.log(error.message, 'mess');

    if (error.message === Errors.USER_NOT_FOUND) {
      errorCode = Errors.USER_NOT_FOUND;
    }

    throw new Error(errorCode);
  }
}
