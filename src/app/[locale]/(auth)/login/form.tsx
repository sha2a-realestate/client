'use client';
import { login } from '@/app/actions/auth';
import { InputWithLabel, SubmitButton } from '@/components/form';
import { Separator } from '@/components/ui';
import { Routes } from '@/constants';
import { updateUserData } from '@/lib/features/authSlice';
import { LoginSchema } from '@/lib/types';
import { decryptToken } from '@/lib/utils';
import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export default function Form() {
  const t = useTranslations();
  const dispatch = useDispatch();
  const router = useRouter();

  const clientAction = async (formData: FormData) => {
    try {
      const result = LoginSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
      });

      if (!result.success) {
        result.error.issues.forEach((issue: any) => {
          toast.error(issue.path[0] + ': ' + issue.message + '.\n');
        });
        return;
      }

      const token = await login(formData);

      toast.success('Logged In Successfully');

      dispatch(updateUserData({ user: await decryptToken(token), token }));

      router.push(Routes.Home);
    } catch (error: any) {
      toast.error(t(`errors.${error.message}`));
    }
  };

  return (
    <form className="flex w-full flex-col items-start gap-4" action={clientAction}>
      <InputWithLabel
        type={'email'}
        label={t('label.email')}
        id="email"
        name="email"
        placeholder={t('placeholder.emailPlaceholder')}
      />

      <InputWithLabel
        type="password"
        label={t('label.password')}
        id="password"
        name="password"
        placeholder={t('placeholder.passwordPlaceholder')}
      />

      <div className="flex w-full flex-col gap-1">
        <SubmitButton size={'sm'} title={t('label.login')} containerClassName="w-full" />
        <Separator className="my-2" />
        {/* <GoogleAuthButton className="w-full" /> */}
      </div>
    </form>
  );
}
