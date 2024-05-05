import { ProtectedRoute } from '@/components/auth';
import { FilterProperties } from './components';

interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({}: HomeProps) {
  return (
    <ProtectedRoute>
      <FilterProperties />
    </ProtectedRoute>
  );
}

