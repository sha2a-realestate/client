import { ErrorStatus, Errors } from '@/constants/errors';
import { loginUser } from '@/services/authService';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;
  try {
    const token = await loginUser(email, password);
    return Response.json({ token }, { status: 200 });
  } catch (error: any) {
    let errorCode = 'Login failed';
    let errorStatus = ErrorStatus.InternalServerError;

    if (error.message === Errors.USER_NOT_FOUND) {
      errorCode = Errors.USER_NOT_FOUND;
      errorStatus = ErrorStatus.NotFound;
    } else if (error.message === Errors.INVALID_PASSWORD) {
      errorCode = Errors.INVALID_PASSWORD;
      errorStatus = ErrorStatus.BadRequest;
    }

    return Response.json({ errorCode }, { status: errorStatus });
  }
}
