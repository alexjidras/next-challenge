import { Resources, TranslateOptions } from '@/types/Translation';

import { getProp } from './getProp';

export const translate = (
  resources: Resources,
  language: string,
  key: string,
  { params, fallback = key }: Omit<TranslateOptions, 'language'> = {},
): string => {
  const translatedKey = getProp(resources, `${language}.${key}`);

  if (!translatedKey || typeof translatedKey !== 'string') {
    if (!translatedKey) {
      console.warn(
        `Missing translation key '${key}' for language '${language}'`,
      );
    } else {
      console.error(
        `Translation key '${key}' for language '${language}' is not a string`,
      );
    }

    return fallback;
  }

  if (!params) {
    return translatedKey;
  }

  return Object.entries(params).reduce(
    (acc, [param, paramValue]) =>
      acc.replace(new RegExp(`{\\s*${param}\\s*}`, 'g'), `${paramValue}`),
    translatedKey,
  );
};
