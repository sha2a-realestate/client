'use client';

// import { Routes } from '@/constants';
// import { selectUser } from '@/lib/features/userSlice';
// import { useAppSelector } from '@/lib/hooks';
// import { useRouter } from '@/navigation';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  // const user = useAppSelector(selectUser);
  // const router = useRouter();

  return <>{children}</>;
}
