'use client';
import { logout } from '@/lib/features/authSlice';
import { useAppDispatch } from '@/lib/hooks';
import { useTranslations } from 'next-intl';
import { Button } from '../ui';

interface LogoutButtonProps {}

export function LogoutButton({}: LogoutButtonProps) {
  const dispatch = useAppDispatch();
  const t = useTranslations();

  const handleLogout = async () => {
    dispatch(logout());
  };

  return <Button onClick={handleLogout}>{t('label.logout')}</Button>;
}
