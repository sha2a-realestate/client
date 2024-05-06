'use client';

import { CompleteProfileStep, Routes } from '@/constants';
import { updateUserData } from '@/lib/features/authSlice';
import { useAppDispatch } from '@/lib/hooks';
import { decrypt } from '@/lib/utils';
import { useRouter } from '@/navigation';
import axios from 'axios';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const signin = async ({ email, password }: { email: string; password: string }) => {
    setLoading(true);
    try {
      const token: string = await axios.post('/api/login', { email, password });
      const decodedUser = decrypt(token);
      dispatch(updateUserData({ user: decodedUser, token }));
      router.push(Routes.Home);
    } catch (error: any) {
      setError(t(`errors.${error.response.data.errorCode}`));
    } finally {
      setLoading(false);
    }
  };

  const signup = async ({ email, password, username }: { username: string; email: string; password: string }) => {
    setLoading(true);
    try {
      await axios.post('/api/register', { username, email, password });
      router.push(Routes.CompleteProfile(CompleteProfileStep.PersonalInfo));
    } catch (error: any) {
      setError(t(`errors.${error.response.data.errorCode}`));
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    signup,
    signin
  };
}
