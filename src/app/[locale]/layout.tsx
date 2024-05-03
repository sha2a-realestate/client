import { DashboardLayout, Navbar } from '@/components/layout';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Baloo_Bhaijaan_2 } from 'next/font/google';
import '../globals.css';
import { StoreProvider } from './StoreProvider';

export const metadata: Metadata = {
  title: 'Sha2a - Realestate',
  description: 'Your one and only place to sell/buy properties'
};

const mainFont = Baloo_Bhaijaan_2({
  display: 'swap',
  subsets: ['arabic', 'latin'],
  variable: '--font-sans'
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const messages = useMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={clsx(mainFont.className, 'min-h-screen')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StoreProvider>
            <Navbar />
            <DashboardLayout>{children}</DashboardLayout>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
