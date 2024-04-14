import { FIREBASE_DB, FIREBASE_STORAGE } from '@/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';

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
    const url = await getDownloadURL(ref(FIREBASE_STORAGE, `profile_pictures/${uid}`));
    const savedData = { ...data, profile_picture: url };
    await updateDoc(userDoc, savedData);

    return Response.json(savedData, { status: 200 });
  } catch (error: any) {
    const errorCode: string = error.code;
    const errorMessage = error.message;
    return Response.json({ errorCode, errorMessage }, { status: 500 });
  }
}
