import { Errors } from '@/constants/errors';
import prisma from '@/db';
import { Property } from '@/types';

export async function createProperty(userId: string, propertyData: Property) {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error(Errors.USER_NOT_FOUND);

    const property = await prisma.property.create({
      data: {
        ...propertyData,
        owner: { connect: { id: userId } }
      }
    });

    return property;
  } catch (error) {
    throw error;
  }
}
