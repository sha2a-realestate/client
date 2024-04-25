'use client';
import { AuthForm } from '@/components/form/auth-form';
import { Container } from '@/components/layout';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

interface LoginPageProps {
  params: {
    type: 'login' | 'register';
  };
}

export default function LoginPage({ params: { type } }: LoginPageProps) {
  const t = useTranslations();

  return (
    <Container className="min-h-[var(--body-height)] max-w-sm flex flex-col items-start justify-center">
      <h1 className="text-primary font-semibold text-3xl mb-4">
        {type === 'login' ? t('login.title') : t('register.title')}
      </h1>

      <AuthForm type={type} />

      <Link href={type === 'login' ? 'register' : 'login'} className="text-primary mt-4 text-sm">
        {type === 'login' ? t('label.createAccount') : t('label.alreadyHaveAccount')}
      </Link>
    </Container>
  );
}
