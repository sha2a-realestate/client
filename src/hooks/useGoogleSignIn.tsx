'use client';

import { CompleteProfileStep, Routes } from '@/constants';
import { FIREBASE_AUTH, FIREBASE_DB } from '@/firebaseConfig';
// import { updateUserData } from '@/lib/features/authSlice';
import { useRouter } from '@/navigation';
import { GoogleAuthProvider, getAdditionalUserInfo, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

export function useSignInWithGoogle() {
  // const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState<any>(null);

  const signUserWithGogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(FIREBASE_AUTH, provider)
      .then(async (result) => {
        const additionalInfo = getAdditionalUserInfo(result);
        const isNewUser = additionalInfo?.isNewUser;

        const { user } = result;
        // dispatch(updateUserData({ user }));

        if (isNewUser) {
          await setDoc(doc(FIREBASE_DB, 'users', user.uid), {
            uid: user.uid,
            email: user.email,
            created_at: new Date().toISOString()
          });
        }
        router.push(isNewUser ? Routes.CompleteProfile(CompleteProfileStep.PersonalInfo) : Routes.Home);
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
