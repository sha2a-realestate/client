'use client';

import { selectUser } from '@/lib/features/authSlice';
import { useAppSelector } from '@/lib/hooks';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { Navbar } from './navbar';
import { SideNav } from './side-nav';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const user = useAppSelector(selectUser);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      {user && <SideNav />}
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
