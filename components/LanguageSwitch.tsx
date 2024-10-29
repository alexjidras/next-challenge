import Link from 'next/link';
import { useRouter } from 'next/router';

interface LanguageSwitchProps {
  pagePathnames?: {
    [locale: string]: string;
  };
}

export const LanguageSwitch = ({ pagePathnames }: LanguageSwitchProps) => {
  const { locale: activeLocale, locales, pathname } = useRouter();

  return (
    <ul>
      {locales?.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={pagePathnames?.[locale] ?? pathname}
              locale={locale}
              className={locale === activeLocale ? 'font-bold' : ''}
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
