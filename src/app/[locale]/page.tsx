interface HomeProps {
  params: {
    locale: string;
  };
}

export default function Home({}: HomeProps) {
  //TODO: custom hook for checking auth and redirect
  return <main className=""></main>;
}
