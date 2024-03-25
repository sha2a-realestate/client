import { useSignInWithGoogle } from '../../services';
import { Button, ButtonProps } from '..';
import GoogleLogoIcon from '@/assets/google-icon-logo.svg';

import clsx from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface GoogleAuthButtonProps extends ButtonProps {}

export function GoogleAuthButton({ className }: GoogleAuthButtonProps) {
  const firebaseSignInWithGoogle = useSignInWithGoogle();
  const t = useTranslations();
  return (
    <Button
      size={'lg'}
      variant={'outline'}
      className={clsx('rounded-full bg-white text-center flex flex-row-reverse items-center gap-4', className)}
      onClick={firebaseSignInWithGoogle}
    >
      <h1>{t('label.signInGoogle')}</h1>
      <Image alt="sign in with google" src={GoogleLogoIcon} className="w-6 h-6" />
    </Button>
  );
}
