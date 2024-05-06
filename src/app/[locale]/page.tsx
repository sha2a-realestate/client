import { isTokenValid } from '@/lib/utils';
import { cookies } from 'next/headers';
import { FilterProperties } from './components';

interface HomeProps {
  params: {
    locale: string;
  };
}

export default function Home({}: HomeProps) {
  const token = cookies().get('session')?.value;
  const x = isTokenValid(token as string);
  console.log(x);

  return (
    <>
      <FilterProperties />
    </>
  );
}
