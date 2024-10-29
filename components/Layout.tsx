import React from 'react';
import Link from 'next/link';

import { useTranslation } from '@/hooks/useTranslation';
import { LanguageSwitch } from './LanguageSwitch';

interface LayoutProps {
  pagePathnames?: {
    [locale: string]: string;
  };
  children?: React.ReactNode;
}

export const Layout = ({ children, pagePathnames }: LayoutProps) => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto">
      <header className="flex items-center">
        <nav>
          <ul>
            <li>
              <Link href="/">{t('link.home')}</Link>
            </li>
            <li>
              <Link href={t('url.about')}>{t('link.about')}</Link>
            </li>
          </ul>
        </nav>

        <LanguageSwitch pagePathnames={pagePathnames} />
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {children}
      </main>
    </div>
  );
};
