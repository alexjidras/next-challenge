import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useTranslation } from '@/hooks/useTranslation';
import { LanguageSwitch } from './LanguageSwitch';
import { useRouter } from 'next/router';

interface LayoutProps {
  pagePathnames?: {
    [locale: string]: string;
  };
  children?: React.ReactNode;
}

export const Layout = ({ children, pagePathnames }: LayoutProps) => {
  const { t } = useTranslation();
  const { asPath } = useRouter();

  return (
    <div className="container mx-auto">
      <nav className="flex items-center px-6 h-[60px] border-b border-slate-900/10 ">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={100}
          height={15}
          priority
        />
        <LanguageSwitch pagePathnames={pagePathnames} />
      </nav>

      <div className="flex flex-start">
        <aside className="w-[255px] bg-[#FAFAFA] p-2 shrink-0">
          <ul>
            <li>
              <Link
                href="/"
                className={`leading-[22px] flex w-full px-2 py-1 hover:underline ${asPath === '/' ? 'text-[rgb(9,9,11)] font-medium' : 'text-[rgb(113,113,122)]'}`}
              >
                {t('link.home')}
              </Link>
            </li>
            <li>
              <Link
                href={t('url.about')}
                className={`leading-[22px] flex w-full px-2 py-1 hover:underline ${asPath === t('url.about') ? 'text-[rgb(9,9,11)] font-medium' : 'text-[rgb(113,113,122)]'}`}
              >
                {t('link.about')}
              </Link>
            </li>
          </ul>
        </aside>

        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};
