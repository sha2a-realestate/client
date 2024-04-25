'use client';
import { useSession } from '@/hooks';
import { ReactNode } from 'react';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn, redirectToLogin } = useSession();

  if (!isLoggedIn) {
    redirectToLogin();
    return null;
  }

  return children;
};
