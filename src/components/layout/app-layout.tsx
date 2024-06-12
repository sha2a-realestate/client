'use client';

import { selectUser } from '@/lib/features/authSlice';
import { useAppSelector } from '@/lib/hooks';
import { usePathname } from '@/navigation';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { ScrollArea } from '../ui';
import { Navbar } from './navbar';
import { SideNav } from './side-nav';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const path = usePathname();
  const user = useAppSelector(selectUser);

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <Navbar />
      {user && path !== '/login' && path !== '/register' && <SideNav />}
      <ScrollArea
        className={clsx('pt-[var(--navbar-height)]', {
          'sm:ps-14': user
        })}
      >
        {children}
      </ScrollArea>
    </div>
  );
}
