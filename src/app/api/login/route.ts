import { ErrorStatus, Errors } from '@/constants/errors';
import { loginUser } from '@/services/authService';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;
  try {
    const token = await loginUser(email, password);
    const cookieStore = cookies();
    cookieStore.set('access-token', token, { secure: true });

    return Response.json({ token }, { status: 200, headers: { 'Set-Cookie': `access-token=${token}` } });
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
