import { FIREBASE_DB } from '@/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

export async function POST(request: Body) {
  const body = await request.json();

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
