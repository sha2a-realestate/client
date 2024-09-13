import { AppLayout } from '@/components/layout';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import local from 'next/font/local';
import { Toaster } from 'react-hot-toast';
import '../globals.css';
import { StoreProvider } from './StoreProvider';
export const metadata: Metadata = {
  title: 'Sha2a - Realestate',
  description: 'Your one and only place to sell/buy properties'
};

const mainFont = local({
  src: [
    { path: '../../../public/fonts/Gilroy-Light.ttf', weight: '300' },
    { path: '../../../public/fonts/Gilroy-Regular.ttf', weight: '400' },
    { path: '../../../public/fonts/Gilroy-Medium.ttf', weight: '500' },
    { path: '../../../public/fonts/Gilroy-SemiBold.ttf', weight: '600' },
    { path: '../../../public/fonts/Gilroy-Bold.ttf', weight: '700' }
  ],
  variable: '--font-gilory'
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <body className={clsx(mainFont.className, 'min-h-screen')}>
          <Toaster position="top-right" />
          <StoreProvider>
            <AppLayout>{children}</AppLayout>{' '}
          </StoreProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
