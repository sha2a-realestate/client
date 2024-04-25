'use client';
import { FIREBASE_AUTH } from '@/firebaseConfig'; // Replace with your Firebase configuration
import { changeAuthState, selectIsLoggedIn } from '@/lib/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useRouter } from '@/navigation';
import { useEffect } from 'react';

export const useSession = (): { isLoggedIn: boolean; redirectToLogin: () => void } => {
  const router = useRouter();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const dispatch = useAppDispatch();

  const redirectToLogin = () => {
    router.push('/login');
  };

  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((user) => {
      console.log(user, 'user state changed');
      dispatch(changeAuthState(!!user));
    });

    return unsubscribe;
  }, [dispatch]);

  return { isLoggedIn, redirectToLogin };
};
