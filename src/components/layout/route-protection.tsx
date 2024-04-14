'use client';

import { Routes } from '@/constants';
import { selectUser } from '@/lib/features/userSlice';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from '@/navigation';
import { ReactNode, useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (!user) {
      router.push(Routes.Auth.Login);
    }
  }, [user, router]);

  if (!user) return <div>You are not authorized, redirecting ....</div>;

  return children;
};

export default ProtectedRoute;
