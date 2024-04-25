interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({}: HomeProps) {

  return <main className="">Dashboard</main>;
}
