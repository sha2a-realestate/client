import GoogleLogoIcon from '@/assets/google-icon-logo.svg';
import { Button, ButtonProps } from '..';

import { useSignInWithGoogle } from '@/hooks';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface GoogleAuthButtonProps extends ButtonProps {}

export function GoogleAuthButton({ className }: GoogleAuthButtonProps) {
  const [firebaseSignInWithGoogle] = useSignInWithGoogle();
  const t = useTranslations();

  return (
    <Button
      size={'lg'}
      variant={'outline'}
      className={clsx('rounded-full bg-white text-center flex flex-row-reverse items-center gap-4', className)}
      onClick={firebaseSignInWithGoogle}
    >
      <h1 className="!m-0 !p-0 text-sm">{t('label.signInGoogle')}</h1>
      <Image alt="sign in with google" src={GoogleLogoIcon} className="w-4 h-4" />
    </Button>
  );
}
