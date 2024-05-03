'use client';

import { selectUser } from '@/lib/features/authSlice';
import { useAppSelector } from '@/lib/hooks';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { Aside } from './aside';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const user = useAppSelector(selectUser);

  return (
    <div className="min-h-screen w-full">
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
