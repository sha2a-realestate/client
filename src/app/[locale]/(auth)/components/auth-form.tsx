import { GoogleAuthButton } from '@/components/auth';
import { InputHandler, SubmitButton } from '@/components/form';
import { AlertDestructive } from '@/components/layout';
import { Separator } from '@/components/ui';
import { Form, Formik } from 'formik';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

interface AuthFormProps {
  initialValues: Record<string, string>;
  onSubmit: (values: any) => void;
  validationSchema: any;
  error?: string | null;
  buttonText: string;
  children?: ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  error,
  buttonText,
  children
}) => {
  const t = useTranslations();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <Form className="w-full flex flex-col items-start gap-4">
          {error && <AlertDestructive title="" description={error} />}

          {children}

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
            <SubmitButton size={'sm'} loading={isSubmitting} title={t(buttonText)} containerClassName="w-full" />
            <Separator className="my-2" />
            <GoogleAuthButton className="w-full" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
