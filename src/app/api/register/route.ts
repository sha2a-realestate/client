import { UserAuthCredentials } from '@/types';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../firebaseConfig';

interface RequestBody extends UserAuthCredentials {}

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

    await setDoc(doc(FIREBASE_DB, 'users', user.uid), { uid: user.uid, email, created_at: new Date().toISOString() });

    return Response.json(user, { status: 201 });
  } catch (error: any) {
    const errorCode: string = error.code;
    const errorMessage = error.message;

    const maskedEmail = email?.slice(0, 2) + '...' || 'your email';

    return Response.json({ errorCode, errorMessage, maskedEmail }, { status: 500 });
  }
}
