'use client';
import { useFormik } from 'formik';
import { useTranslations } from 'next-intl';
import { InputWithLabel, GoogleAuthButton, SubmitButton, Separator } from '@/components';
import Link from 'next/link';
import { useSignInWithEmailAndPassword } from '@/services';

export function LoginForm({}) {
  const t = useTranslations();
  const firebaseUserSignIn = useSignInWithEmailAndPassword();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => await firebaseUserSignIn(values)
  });

  return (
    <form className="w-full flex flex-col items-start gap-4" onSubmit={formik.handleSubmit}>
      <InputWithLabel
        label={t('label.email')}
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder={t('label.enterEmail')}
      />

      <InputWithLabel
        label={t('label.password')}
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder={t('label.enterPassword')}
        type="password"
      />

      <div className="flex flex-col gap-1 w-full">
        <SubmitButton loading={formik.isSubmitting} title={t('label.login')} containerClassName="w-full" />
        <Separator className="my-2" />
        <GoogleAuthButton className="w-full" />
      </div>

      <Link className="text-primary" href={'register'}>
        {t('label.createAccount')}
      </Link>
    </form>
  );
}
