import ProtectedRoute from '@/components/layout/route-protection';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
