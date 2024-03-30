'use client';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FIREBASE_AUTH } from '@/firebaseConfig';
import { login } from '@/lib/features/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export function useSignInWithGoogle() {
  const dispatch = useDispatch();
  const [error, setError] = useState<any>(null);

  const signUserWithGogle = () => {
    const provider = new GoogleAuthProvider();

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
        setError({ errorCode, errorMessage, email, credential });
      });
  };

  return [signUserWithGogle, error];
}
