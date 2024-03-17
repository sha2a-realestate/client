import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  //Add locales you want in the app
  locales: ["en", "ar"],

  // default locale if no match
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ar)/:path*"],
};
