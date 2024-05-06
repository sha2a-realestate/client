'use client';
import { Routes } from '@/constants';
import { logout } from '@/lib/features/authSlice';
import { useAppDispatch } from '@/lib/hooks';
import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '../ui';

interface LogoutButtonProps {}

export function LogoutButton({}: LogoutButtonProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const t = useTranslations();

  const handleLogout = async () => {
    router.push(Routes.Auth.Login);
    dispatch(logout());
  };

  return <Button onClick={handleLogout}>{t('label.logout')}</Button>;
}
