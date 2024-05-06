'use client';
import { Container } from '@/components/layout';
import { Routes } from '@/constants';
import { useAuth } from '@/hooks/useAuth';
import { Link } from '@/navigation';
import { loginCredentialsValidationSchema } from '@/schemas';
import { useTranslations } from 'next-intl';
import AuthForm from '../components/auth-form';

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps) {
  const t = useTranslations();
  const { error, signin } = useAuth();

  return (
    <Container className="min-h-[var(--body-height)] max-w-sm flex flex-col items-start justify-center">
      <h1 className="text-primary font-semibold text-3xl mb-4">{t('login.title')}</h1>

      <AuthForm
        validationSchema={loginCredentialsValidationSchema}
        onSubmit={signin}
        buttonText={'label.login'}
        initialValues={{ email: '', passowrd: '' }}
        error={error}
      />

      <Link href={Routes.Auth.Register} className="text-primary mt-4 text-sm">
        {t('label.createAccount')}
      </Link>
    </Container>
  );
}
