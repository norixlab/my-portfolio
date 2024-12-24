import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Locale } from "./i18n.config";
import { i18n } from "@/i18n.config";

/**
 * Retrieves the locale from the 'accept-language' header of an incoming request.
 * If the extracted language is not supported, it defaults to the application's
 * default locale.
 *
 * @param {NextRequest} request - The incoming request object containing headers.
 * @returns {Locale} - The locale extracted from the request or the default locale.
 */
function getLocale(request: NextRequest) {
  const lang = request.headers.get("accept-language")?.split(",")[0];

  return lang && i18n.locales.includes(lang as Locale)
    ? lang
    : i18n.defaultLocale;
}

/**
 * Redirects incoming requests to the correct locale based on the `accept-language`
 * header. If the request's path does not contain a locale, it redirects to the
 * default locale. If the request's path does contain a locale, it passes the
 * request through to the next middleware.
 *
 * @param {NextRequest} request - The incoming request object containing headers.
 * @returns {NextResponse | undefined} - The redirect response if the request needs
 *   to be redirected, or `undefined` if the request can be passed through to the
 *   next middleware.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|yandex_14718eb633b29229.html).*)",
  ],
};
