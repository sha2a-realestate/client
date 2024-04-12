'use client';

import { GoogleAuthProvider, getAdditionalUserInfo, signInWithPopup } from 'firebase/auth';
import { FIREBASE_AUTH } from '@/firebaseConfig';
import { login } from '@/lib/features/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRouter } from '@/navigation';
import { CompleteProfileStep, Routes } from '@/constants';

export function useSignInWithGoogle() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState<any>(null);

  const signUserWithGogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(FIREBASE_AUTH, provider)
      .then((result) => {
        const additionalInfo = getAdditionalUserInfo(result);
        const { user } = result;
        dispatch(login({ user }));
        router.push(
          additionalInfo?.isNewUser ? Routes.CompleteProfile(CompleteProfileStep.ProfileInfo) : Routes.Dashboard.Index
        );
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
