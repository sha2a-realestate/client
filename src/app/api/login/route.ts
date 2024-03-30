import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import { UserLoginCredentials } from '@/types';

interface RequestBody extends UserLoginCredentials {}

function validateRequest(object: any): object is RequestBody {
  return (object as RequestBody) && typeof (object as RequestBody).email === 'string';
}

export async function POST(request: Body) {
  const auth = FIREBASE_AUTH;
  const body = await request.json();

  if (!validateRequest(body)) {
    return new Response('Invalid Data', { status: 400 });
  }

  const { email, password } = body;

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const { user } = result;

    return Response.json(user, { status: 200 });
  } catch (error: any) {
    const errorCode: string = error.code;
    const errorMessage = error.message;

    const maskedEmail = email?.slice(0, 2) + '...' || 'your email';

    return Response.json({ errorCode, errorMessage, maskedEmail }, { status: 500 });
  }
}
