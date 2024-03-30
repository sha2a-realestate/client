'use client';

import { Form, Formik } from 'formik';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { AlertDestructive, GoogleAuthButton, SubmitButton, Separator, Input } from '@/components';
import { useUserLogin } from '@/hooks';
import { loginCredentialsValidationSchema } from '@/schemas';

export function LoginForm({}) {
  const t = useTranslations();
  const [login, error] = useUserLogin();

  const handleSubmit = async (values: any) => await login(values);

  return (
    <Formik
      className="w-full"
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={loginCredentialsValidationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="w-full flex flex-col items-start gap-4">
          {error && <AlertDestructive title="" description={error.errorMessage} />}
          <Input label={t('label.email')} id="email" name="email" placeholder={t('label.enterEmail')} />
          <Input
            type="password"
            label={t('label.password')}
            id="password"
            name="password"
            placeholder={t('label.enterPassword')}
          />

          <div className="flex flex-col gap-1 w-full">
            <SubmitButton loading={isSubmitting} title={t('label.login')} containerClassName="w-full" />
            <Separator className="my-2" />
            <GoogleAuthButton className="w-full" />
          </div>

          <Link className="text-primary" href={'register'}>
            {t('label.createAccount')}
          </Link>
        </Form>
      )}
    </Formik>
  );
}
