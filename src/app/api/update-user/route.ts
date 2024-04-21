import { FIREBASE_DB } from '@/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

interface RequestBody {
  data: any;
  uid: string;
}
function validateRequest(object: any): object is RequestBody {
  return (object as RequestBody) && typeof (object as RequestBody).uid === 'string';
}

export async function POST(request: Body) {
  const body = await request.json();

  if (!validateRequest(body)) {
    return new Response('Invalid Data', { status: 400 });
  }

  const { data, uid } = body;
  const userDoc = doc(FIREBASE_DB, 'users', uid);

  try {
    const savedData = { ...data };
    await updateDoc(userDoc, savedData);

    return Response.json(savedData, { status: 200 });
  } catch (error: any) {
    const errorCode: string = error.code;
    const errorMessage = error.message;
    return Response.json({ errorCode, errorMessage }, { status: 500 });
  }
}
