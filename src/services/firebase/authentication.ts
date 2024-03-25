import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import { login } from '../../lib/features/userSlice';
import { useDispatch } from 'react-redux';

interface signUserInProps {
  email: string;
  password: string;
}

export function useSignInWithEmailAndPassword() {
  const dispatch = useDispatch();
  async function signUserIn({ email, password }: signUserInProps) {
    try {
      const auth = FIREBASE_AUTH;
      const response = await signInWithEmailAndPassword(auth, email, password);
      const { user } = response;
      dispatch(login({ user }));
    } catch (error) {
      throw new Error(`Error happened ${error}}`);
    }
  }

  return signUserIn;
}

export function useSignInWithGoogle() {
  const dispatch = useDispatch();

  const signUserWithGogle = () => {
    const provider = new GoogleAuthProvider();
    FIREBASE_AUTH.languageCode = 'ar';

    signInWithPopup(FIREBASE_AUTH, provider)
      .then((result) => {
        const { user } = result;
        dispatch(login({ user }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return signUserWithGogle;
}
