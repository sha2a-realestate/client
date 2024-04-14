'use client';
import { CompleteProfileStep, Routes } from '@/constants';
import { login } from '@/lib/features/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import { useRouter } from '@/navigation';
import { userLogin } from '@/services/api';
import { userRegister } from '@/services/api/userRegister';
import { UserAuthCredentials } from '@/types';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

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
      router.replace(
        type === 'login' ? Routes.Dashboard.Index : Routes.CompleteProfile(CompleteProfileStep.PersonalInfo)
      );
    } else {
      setError({ ...response, errorMessage: t(`errors.${response.errorCode}`) });
      setTimeout(() => {
        setError(null);
      }, 5_000);
    }
  };

  return [authenticateUser, error];
}
