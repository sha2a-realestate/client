// import { authMiddleware } from '@clerk/nextjs';
import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';

// Create internationalization middleware
export default createMiddleware({
  locales: locales,
  defaultLocale: 'ar',
  localePrefix
});

// const clerkAuthOptions = {
//   publicRoutes: ['/:locale/sign-up', '/:locale/sign-in']
// };

// export default authMiddleware({
//   ...clerkAuthOptions,
//   beforeAuth: (req) => {
//     return intlMiddleware(req);
//   }
// });

export const config = {
  // Define your custom config as needed
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
