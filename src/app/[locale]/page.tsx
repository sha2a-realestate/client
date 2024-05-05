import { FilterProperties } from './components';

interface HomeProps {
  params: {
    locale: string;
  };
}

export default function Home({}: HomeProps) {
  return <FilterProperties />;
}
