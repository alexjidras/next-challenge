import Link from 'next/link';
import { useRouter } from 'next/router';

interface LanguageSwitchProps {
  pagePathnames?: { [locale: string]: string };
}

export const LanguageSwitch = ({ pagePathnames }: LanguageSwitchProps) => {
  const { locale: activeLocale, locales, asPath } = useRouter();

  return (
    <div className="ml-auto">
      {locales?.map((locale) => {
        return (
          <Link
            href={pagePathnames?.[locale] ?? asPath}
            locale={locale}
            key={locale}
            className={
              locale === activeLocale
                ? 'inline-flex uppercase font-medium items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[rgb(24,24,27)] text-white shadow hover:bg-[rgb(24,24,27)]/90 h-9 px-4 py-2'
                : 'inline-flex uppercase font-medium items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[rgb(244,244,245)] text-[rgb(24,24,27)] shadow-sm hover:bg-[rgb(244,244,245)]/80 h-9 px-4 py-2'
            }
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
};
