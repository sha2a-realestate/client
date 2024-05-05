import { ProtectedRoute } from '@/components/auth';
import { FilterProperties } from './components';

interface HomeProps {
  params: {
    locale: string;
  };
}

export default function Home({}: HomeProps) {
  return (
    <ProtectedRoute>
      <FilterProperties />
    </ProtectedRoute>
  );
}
