import { ProtectedRoute } from '@/components';

interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({}: HomeProps) {
  return (
    <ProtectedRoute>
      <main className="">Dashboard</main>
    </ProtectedRoute>
  );
}
