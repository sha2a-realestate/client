'use client';
import { useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { login } from '@/lib/features/userSlice';
import { userLogin } from '@/services/api';
import { UserAuthCredentials } from '@/types';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';
import { CompleteProfileStep, Routes } from '@/constants';
import { userRegister } from '@/services/api/userRegister';

export function useUserLoginAndRegister({
  type
}: {
  type: 'login' | 'register';
}): [(object: UserAuthCredentials) => void, any] {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<any>(null);
  const t = useTranslations();
  const router = useRouter();

  const authenticateUser = async ({ email, password }: UserAuthCredentials) => {
    const response =
      type === 'register' ? await userRegister({ email, password }) : await userLogin({ email, password });

    if (response.uid) {
      dispatch(login({ user: response }));
      router.push(type === 'login' ? Routes.Dashboard.Index : Routes.CompleteProfile(CompleteProfileStep.ProfileInfo));
    } else {
      setError({ ...response, errorMessage: t(`errors.${response.errorCode}`) });
      setTimeout(() => {
        setError(null);
      }, 5_000);
    }
  };

  return [authenticateUser, error];
}
