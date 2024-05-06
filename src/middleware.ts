import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { localePrefix, locales } from './navigation';

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale: 'ar',
    localePrefix
  });
  const [, locale] = request.nextUrl.pathname.split('/');

  const token = request.cookies.get('session');

  if (!token && request.nextUrl.pathname !== `/${locale}/register`) {
    request.nextUrl.pathname = `/${locale}/login`;
  }

  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
