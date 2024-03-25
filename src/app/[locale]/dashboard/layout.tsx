import ProtectedRoute from '@/components/layout/route-protection';
import React, { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default DashboardLayout;
