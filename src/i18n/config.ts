export const defaultLocale = 'ko' as const;
export const locales = ['ko', 'en'] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPath(path: string): Locale {
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment === 'en') {
    return 'en';
  }

  return defaultLocale;
}

export function getPathWithoutLocale(path: string): string {
  const locale = getLocaleFromPath(path);
  if (locale === 'en') {
    return path.replace(/^\/en\/?/, '/');
  }
  return path;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = getPathWithoutLocale(path);
  if (locale === defaultLocale) {
    return cleanPath;
  }
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}
