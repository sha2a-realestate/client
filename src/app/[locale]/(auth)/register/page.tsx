import { Container } from '@/components/layout';
import { Routes } from '@/constants';
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';
import Form from './form';

interface RegisterPageProps {}

export default async function RegisterPage({}: RegisterPageProps) {
  const t = await getTranslations();

  return (
    <Container className="min-h-[var(--body-height)] max-w-sm flex flex-col items-start justify-center">
      <h1 className="text-primary font-semibold text-3xl mb-4">
        {t('register.title')}
      </h1>

      <Form />

      <Link href={Routes.Auth.Login} className="text-primary mt-4 text-sm">
        {t('label.alreadyHaveAccount')}
      </Link>
    </Container>
  );
}
