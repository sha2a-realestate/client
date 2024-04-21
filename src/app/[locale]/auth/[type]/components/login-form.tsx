import { AlertDestructive, GoogleAuthButton, Input, Separator, SubmitButton } from '@/components';
import { useUserLoginAndRegister } from '@/hooks';
import { loginCredentialsValidationSchema } from '@/schemas';
import { Form, Formik } from 'formik';
import { useTranslations } from 'next-intl';

interface AuthFormProps {
  type: 'login' | 'register';
}

export function AuthForm({ type }: AuthFormProps) {
  const t = useTranslations();
  const [authenticate, error] = useUserLoginAndRegister({ type });

  const handleSubmit = async (values: any) => await authenticate(values);

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
          <Input label={t('label.email')} id="email" name="email" placeholder={t('placeholder.emailPlaceholder')} />
          <Input
            type="password"
            label={t('label.password')}
            id="password"
            name="password"
            placeholder={t('placeholder.passwordPlaceholder')}
          />
          <div className="flex flex-col gap-1 w-full">
            <SubmitButton
              size={'sm'}
              loading={isSubmitting}
              title={type === 'login' ? t('label.login') : t('label.signUp')}
              containerClassName="w-full"
            />
            <Separator className="my-2" />
            <GoogleAuthButton className="w-full" />
          </div>
        </Form>
      )}
    </Formik>
  );
}
