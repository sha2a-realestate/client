'use client';
import { Container } from '@/components/layout';
import { AuthForm } from '../components/login-form';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Link } from '@/navigation';

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps) {
  const t = useTranslations();
  const { type } = useParams<{ type: 'login' | 'register' }>();

  return (
    <Container className="min-h-[var(--body-height)] max-w-sm flex flex-col items-start justify-center">
      <h1 className="text-primary font-semibold text-3xl mb-4">
        {type === 'login' ? t('login.title') : t('register.title')}
      </h1>

      <AuthForm type={type} />

      <Link href={type === 'login' ? 'register' : 'login'} className="text-primary mt-4">
        {type === 'login' ? t('label.createAccount') : t('label.alreadyHaveAccount')}
      </Link>
    </Container>
  );
}
