'use client';
import clsx from 'clsx';
import { Container } from '.';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import LogoWhite from '@/assets/logo-white.png';
import Link from 'next/link';
import { Routes } from '../../constants';
import { useTranslations } from 'next-intl';
import { Avatar, AvatarFallback, AvatarImage } from '..';
import { selectUser } from '@/lib/features/userSlice';
import { useAppSelector } from '@/lib/hooks';
import { SwitchLanguage } from './switch-language';

interface NavbarProps {}

export function Navbar({}: NavbarProps) {
  const t = useTranslations();

  const user = useAppSelector(selectUser);

  return (
    <nav className={clsx('flex items-center w-full bg-secondary text-white h-[var(--navbar-height)]')}>
      <Container className="flex items-center justify-between">
        <Link href={Routes.Home}>
          <Image src={LogoWhite} alt="Sha2a Real-estate" className={clsx('h-8 w-24', 'md:h-12 md:w-32')} />
        </Link>

        <div className="flex items-center gap-2">
          {!user && (
            <div className={clsx('items-center gap-4 hidden', 'sm:flex')}>
              <Button variant={'ghost'} className="hover:text-white/90 hover:!bg-transparent">
                {t('label.login')}
              </Button>
              <Button className={'rounded-full'} size={'lg'}>
                {t('label.signUp')}
              </Button>
            </div>
          )}

          {user && (
            <Avatar>
              <AvatarImage src={user.photoURL as string | undefined} />
              <AvatarFallback>{user.displayName}</AvatarFallback>
            </Avatar>
          )}

          <SwitchLanguage />
        </div>
      </Container>
    </nav>
  );
}
