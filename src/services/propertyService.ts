import { Errors } from '@/constants/errors';
import prisma from '@/db';
import { CreatePropertyBody } from '@/types';

export async function createProperty(
  userId: string,
  propertyData: CreatePropertyBody
) {
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

export async function getProperty(userId?: string) {
  try {
    let properties = [];

    if (userId) {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) throw new Error(Errors.USER_NOT_FOUND);

      properties = await prisma.property.findMany({
        where: { ownerId: userId }
      });
    } else {
      properties = await prisma.property.findMany();
    }

    return properties;
  } catch (error) {
    throw error;
  }
}
