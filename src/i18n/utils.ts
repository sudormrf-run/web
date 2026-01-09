import type { Locale } from './config';
import ko from './ko.json';
import en from './en.json';

const translations: Record<Locale, typeof ko> = {
  ko,
  en,
};

type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}.${NestedKeyOf<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;

export type TranslationKey = NestedKeyOf<typeof ko>;

export function t(locale: Locale, key: TranslationKey): string {
  const keys = key.split('.');
  let value: unknown = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }

  return typeof value === 'string' ? value : key;
}

export function useTranslations(locale: Locale) {
  return {
    t: (key: TranslationKey) => t(locale, key),
    locale,
  };
}
