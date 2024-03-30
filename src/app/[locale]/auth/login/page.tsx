import { Container } from '@/components/layout';
import { LoginForm } from '../components/login-form';
import { useTranslations } from 'next-intl';

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps) {
  const t = useTranslations();
  return (
    <Container className="min-h-[var(--body-height)] max-w-sm flex flex-col items-start justify-center">
      <h1 className="text-primary font-semibold text-3xl mb-4">{t('login.welcomeBack')}</h1>
      <LoginForm />
    </Container>
  );
}
