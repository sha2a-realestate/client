'use client';

import { selectUser } from '@/lib/features/authSlice';
import { useAppSelector } from '@/lib/hooks';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { Aside } from './aside';
import { Navbar } from './navbar';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const user = useAppSelector(selectUser);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      {user && <Aside />}
      <div
        className={clsx({
          'sm:ps-14': user
        })}
      >
        {children}
      </div>
    </div>
  );
}
