'use client';
import { GoogleAuthButton } from '@/components/auth';
import { InputHandler, SubmitButton } from '@/components/form';
import { AlertDestructive, Container } from '@/components/layout';
import { Separator } from '@/components/ui';
import { Routes } from '@/constants';
import { useAuth } from '@/hooks/useAuth';
import { Link } from '@/navigation';
import { loginCredentialsValidationSchema } from '@/schemas';
import { Form, Formik } from 'formik';
import { useTranslations } from 'next-intl';

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps) {
  const t = useTranslations();
  const { error, signin } = useAuth();

  return (
    <Container className="min-h-[var(--body-height)] max-w-sm flex flex-col items-start justify-center">
      <h1 className="text-primary font-semibold text-3xl mb-4">{t('login.title')}</h1>

      <Formik
        className="w-full"
        initialValues={{ email: '', password: '' }}
        onSubmit={signin}
        validationSchema={loginCredentialsValidationSchema}
      >
        {({ isSubmitting }) => (
          <Form className="w-full flex flex-col items-start gap-4">
            {error && <AlertDestructive title="" description={error} />}
            <InputHandler
              label={t('label.email')}
              id="email"
              name="email"
              placeholder={t('placeholder.emailPlaceholder')}
            />
            <InputHandler
              type="password"
              label={t('label.password')}
              id="password"
              name="password"
              placeholder={t('placeholder.passwordPlaceholder')}
            />
            <div className="flex flex-col gap-1 w-full">
              <SubmitButton size={'sm'} loading={isSubmitting} title={t('label.login')} containerClassName="w-full" />
              <Separator className="my-2" />
              <GoogleAuthButton className="w-full" />
            </div>
          </Form>
        )}
      </Formik>

      <Link href={Routes.Auth.Register} className="text-primary mt-4 text-sm">
        {t('label.createAccount')}
      </Link>
    </Container>
  );
}
