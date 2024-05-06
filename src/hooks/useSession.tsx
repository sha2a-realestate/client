'use client';

import { Routes } from '@/constants';
import { selectIsLoggedIn } from '@/lib/features/authSlice';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from '@/navigation';

export const useSession = (): { isLoggedIn: boolean; redirectToLogin: () => void } => {
  const router = useRouter();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const redirectToLogin = () => {
    router.push(Routes.Auth.Login);
  };

  return { isLoggedIn, redirectToLogin };
};
