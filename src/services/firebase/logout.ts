import { FIREBASE_AUTH } from '@/firebaseConfig';
import { signOut } from 'firebase/auth';

export async function EndUserSession() {
  signOut(FIREBASE_AUTH)
    .then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
    })
    .catch((error) => {
      // An error happened.
      console.error(error);
    });
}
