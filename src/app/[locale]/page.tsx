import { ProtectedRoute } from '@/components/auth';
import { FilterProperties } from '@/components/common';
import { Container } from '@/components/layout';

interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({}: HomeProps) {
  return (
    <ProtectedRoute>
      <main className="">
        <Container>
          <FilterProperties />
        </Container>
      </main>
    </ProtectedRoute>
  );
}
