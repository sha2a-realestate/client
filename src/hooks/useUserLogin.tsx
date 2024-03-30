'use client';
import { useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { login } from '@/lib/features/userSlice';
import { userLogin } from '@/services/api';
import { UserLoginCredentials } from '@/types';
import { useTranslations } from 'next-intl';

export function useUserLogin(): [(object: UserLoginCredentials) => void, any] {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<any>(null);
  const t = useTranslations();
  const signUserIn = async ({ email, password }: UserLoginCredentials) => {
    const response = await userLogin({ email, password });

    if (response.uid) {
      dispatch(login({ user: response }));
    } else {
      setError({ ...response, errorMessage: t(`errors.${response.errorCode}`) });

      setTimeout(() => {
        setError(null);
      }, 5_000);
    }
  };

  return [signUserIn, error];
}
