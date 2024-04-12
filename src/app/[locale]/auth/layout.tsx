'use client';

import { Routes } from '@/constants';
import { selectUser } from '@/lib/features/userSlice';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from '@/navigation';
import { ReactNode, useEffect } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const user = useAppSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(Routes.Dashboard.Index);
    }
  }, [user, router]);

  return <>{children}</>;
}
