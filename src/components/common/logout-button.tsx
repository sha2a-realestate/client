import { Routes } from '@/constants';
import { logout } from '@/lib/features/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '../ui';

interface LogoutButtonProps {}

export function LogoutButton({}: LogoutButtonProps) {
  const dispatch = useAppDispatch();
  const t = useTranslations();
  const router = useRouter();

  const handleLogout = () => {
    router.replace(Routes.Auth.Login);
    dispatch(logout());
  };

  return <Button onClick={handleLogout}>{t('label.logout')}</Button>;
}
