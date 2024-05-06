'use client';
import { InputHandler } from '@/components/form';
import { Container } from '@/components/layout';
import { Routes } from '@/constants';
import { useAuth } from '@/hooks/useAuth';
import { Link } from '@/navigation';
import { loginCredentialsValidationSchema } from '@/schemas';
import { useTranslations } from 'next-intl';
import AuthForm from '../components/auth-form';

interface RegisterPageProps {}

export default function RegisterPage({}: RegisterPageProps) {
  const t = useTranslations();
  const { error, signup } = useAuth();

  return (
    <Container className="min-h-[var(--body-height)] max-w-sm flex flex-col items-start justify-center">
      <h1 className="text-primary font-semibold text-3xl mb-4">{t('register.title')}</h1>

      <AuthForm
        validationSchema={loginCredentialsValidationSchema}
        onSubmit={signup}
        buttonText={'label.signUp'}
        initialValues={{ username: '', email: '', passowrd: '' }}
        error={error}
      >
        <InputHandler
          label={t('label.username')}
          id="username"
          name="username"
          placeholder={t('placeholder.userNamePlaceholder')}
        />
      </AuthForm>

      <Link href={Routes.Auth.Login} className="text-primary mt-4 text-sm">
        {t('label.alreadyHaveAccount')}
      </Link>
    </Container>
  );
}
