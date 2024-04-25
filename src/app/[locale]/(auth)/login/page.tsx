'use client';
import { AuthForm } from '@/components/form/auth-form';
import { Container } from '@/components/layout';
import { Routes } from '@/constants';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps) {
  const t = useTranslations();

  return (
    <Container className="min-h-[var(--body-height)] max-w-sm flex flex-col items-start justify-center">
      <h1 className="text-primary font-semibold text-3xl mb-4">{t('login.title')}</h1>

      <AuthForm type={'login'} />

      <Link href={Routes.Auth.Register} className="text-primary mt-4 text-sm">
        {t('label.createAccount')}
      </Link>
    </Container>
  );
}
