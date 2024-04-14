
interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({}: HomeProps) {
  //TODO: custom hook for checking auth and redirect

  return <main className=""></main>;
}
