import React from 'react';
import { useRouter } from 'next/router';

import {
  Resources,
  TranslationContextValue,
  Translate,
} from '@/types/Translation';
import { translate } from '@/utils/translate';

export const TranslationContext = React.createContext<TranslationContextValue>({
  resources: {},
  t: () => '',
});

interface TranslationProviderProps {
  resources: Resources;
  children: React.ReactNode;
}

export const TranslationProvider = ({
  resources,
  children,
}: TranslationProviderProps) => {
  const { locale: activeLocale, locales } = useRouter();

  React.useEffect(() => {
    locales?.forEach((locale) => {
      if (!resources[locale]) {
        console.error(`Missing translations for language '${locale}'`);
      }
    });
  }, [locales, resources]);

  const t: Translate = React.useCallback<Translate>(
    (key, { language = activeLocale!, ...options } = {}) =>
      translate(resources, language, key, options),
    [resources, activeLocale],
  );

  const ctxVal = React.useMemo(
    () => ({
      resources,
      t,
    }),
    [resources, t],
  );

  return (
    <TranslationContext.Provider value={ctxVal}>
      {children}
    </TranslationContext.Provider>
  );
};
