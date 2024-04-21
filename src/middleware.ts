import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';

export default createMiddleware({
  locales: locales,
  defaultLocale: 'ar',
  localePrefix
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
