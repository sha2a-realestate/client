import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import { UserLoginCredentials } from '@/types';

interface RequestBody extends UserLoginCredentials {}

function validateRequest(object: any): object is RequestBody {
  return (object as RequestBody) && typeof (object as RequestBody).email === 'string';
}

export async function POST(request: Body) {
  const body = await request.json();

  if (!validateRequest(body)) {
    return new Response('Invalid Data', { status: 400 });
  }

  const { email, password } = body;

  try {
    const auth = FIREBASE_AUTH;
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = response;
    return Response.json(user, { status: 201 });
  } catch (error) {
    throw new Error(`${error}}`);
  }
}
