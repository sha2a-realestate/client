import { ErrorStatus, Errors } from '@/constants/errors';
import { createProperty } from '@/services';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { userId, ...propertyData } = body;
  console.log(userId, propertyData);

  try {
    const property = await createProperty(userId, propertyData);

    return Response.json(property, { status: 201 });
  } catch (error: any) {
    let errorCode = 'Failed to create a new property';
    let errorStatus = ErrorStatus.InternalServerError;
    console.log(error);

    if (error.message === Errors.USER_NOT_FOUND) {
      errorCode = Errors.USER_NOT_FOUND;
      errorStatus = ErrorStatus.NotFound;
    }

    return Response.json({ errorCode }, { status: errorStatus });
  }
}
