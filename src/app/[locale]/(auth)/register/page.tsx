'use client';
import { AuthForm } from '@/components/form';
import { Container } from '@/components/layout';
import { Routes } from '@/constants';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

interface RegisterPageProps {}

export default function RegisterPage({}: RegisterPageProps) {
  const t = useTranslations();

  return (
    <Container className="min-h-[var(--body-height)] max-w-sm flex flex-col items-start justify-center">
      <h1 className="text-primary font-semibold text-3xl mb-4">{t('register.title')}</h1>

      <AuthForm type={'register'} />

      <Link href={Routes.Auth.Login} className="text-primary mt-4 text-sm">
        {t('label.alreadyHaveAccount')}
      </Link>
    </Container>
  );
}
