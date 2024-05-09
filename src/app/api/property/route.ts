import { ErrorStatus, Errors } from '@/constants/errors';
import { createProperty, getProperty } from '@/services';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { userId, ...propertyData } = body;

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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  try {
    const property = await getProperty(userId as string);

    return Response.json(property, { status: 200 });
  } catch (error: any) {
    let errorCode = 'Failed to fetch properties';
    let errorStatus = ErrorStatus.InternalServerError;
    console.log(error);

    if (error.message === Errors.USER_NOT_FOUND) {
      errorCode = Errors.USER_NOT_FOUND;
      errorStatus = ErrorStatus.NotFound;
    }

    return Response.json({ errorCode }, { status: errorStatus });
  }
}
