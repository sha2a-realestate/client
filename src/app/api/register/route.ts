import { ErrorStatus, Errors } from '@/constants/errors';
import { registerUser } from '@/services/authService';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password, username } = body;

  try {
    const token = await registerUser(username, email, password);
    const cookieStore = cookies();
    cookieStore.set('access-token', token, { secure: true });

    return Response.json({ token }, { status: 201, headers: { 'Set-Cookie': `access-token=${token}` } });
  } catch (error: any) {
    let errorCode = 'Registeration failed';
    let errorStatus = ErrorStatus.InternalServerError;

    if (error.message === Errors.USER_ALREADY_EXIST) {
      errorCode = Errors.USER_ALREADY_EXIST;
      errorStatus = ErrorStatus.BadRequest;
    }

    return Response.json({ errorCode }, { status: errorStatus });
  }
}
