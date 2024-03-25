'use client';
import React, { ReactNode } from 'react';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from '@/navigation';
import { selectUser } from '@/lib/features/userSlice';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const user = useAppSelector(selectUser);

  React.useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [user, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
