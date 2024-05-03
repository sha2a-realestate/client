'use client';
import LogoWhite from '@/assets/logo-white.png';
import { LogoutButton } from '@/components/auth';
import { Button } from '@/components/ui';
import { Routes } from '@/constants';
import { selectIsLoggedIn } from '@/lib/features/authSlice';
import { useAppSelector } from '@/lib/hooks';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '.';

interface NavbarProps {}

export function Navbar({}: NavbarProps) {
  const t = useTranslations();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <nav className={clsx('flex items-center relative z-20 w-full bg-secondary text-white h-[var(--navbar-height)]')}>
      <Container className="flex items-center justify-between">
        <Link href={Routes.Home}>
          <Image src={LogoWhite} alt="Sha2a Real-estate" className={clsx('h-8 w-24', 'md:h-12 md:w-32')} />
        </Link>

        <div className="flex items-center gap-2">
          {!isLoggedIn && (
            <div className={clsx('items-center gap-4 hidden', 'sm:flex')}>
              <Button variant={'ghost'} className="hover:text-white/90 hover:!bg-transparent">
                {t('label.login')}
              </Button>
              <Button className={'rounded-full'} size={'lg'}>
                {t('label.signUp')}
              </Button>
            </div>
          )}

          {/* {user && (
            <Avatar>
              <AvatarImage src={user.photoURL as string | undefined} />
              <AvatarFallback>{user.displayName}</AvatarFallback>
            </Avatar>
          )} */}

          {isLoggedIn && <LogoutButton />}
        </div>
      </Container>
    </nav>
  );
}
