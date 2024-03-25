'use client';
import React, { ReactNode } from 'react';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from '@/navigation';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user.user);

  React.useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [user, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
