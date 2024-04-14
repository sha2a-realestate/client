import ProtectedRoute from '@/components/layout/route-protection';
import { ReactNode } from 'react';

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
