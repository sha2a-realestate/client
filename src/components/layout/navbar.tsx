'use client';
import clsx from 'clsx';
import { Container } from '.';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import LogoWhite from '@/assets/logo-white.png';
import Link from 'next/link';
import { Routes } from '../../constants';
import { useTranslations, useLocale } from 'next-intl';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter, usePathname } from '../../navigation';

interface NavbarProps {}

export function Navbar({}: NavbarProps) {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const handleChange = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <nav className={clsx('flex items-center w-full bg-secondary text-white h-[var(--navbar-height)]')}>
      <Container className="flex items-center justify-between">
        <Link href={Routes.Home}>
          <Image src={LogoWhite} alt="Sha2a Real-estate" className={clsx('h-8 w-24', 'md:h-12 md:w-32')} />
        </Link>

        {/* TODO: Handle remove on auth and show user avatar */}
        <div className="flex items-center gap-2">
          <div className={clsx('items-center gap-4 hidden', 'sm:flex')}>
            <Button variant={'ghost'} className="hover:text-white/90 hover:!bg-transparent">
              {t('label.login')}
            </Button>
            <Button className={'rounded-full'} size={'lg'}>
              {t('label.signUp')}
            </Button>
          </div>

          <Select defaultValue={locale} onValueChange={handleChange}>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="lang" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ar">AR</SelectItem>
              <SelectItem value="en">EN</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Container>
    </nav>
  );
}
