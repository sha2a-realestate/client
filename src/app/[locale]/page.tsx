import { ProtectedRoute } from '@/components/auth';
import { FilterProperties } from '@/components/common';

interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({}: HomeProps) {
  return (
    <ProtectedRoute>
      <main className="">
        <FilterProperties />
      </main>
    </ProtectedRoute>
  );
}
