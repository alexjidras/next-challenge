import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from '@/hooks/useTranslation';

export const Sidebar = () => {
  const { t } = useTranslation();
  const { asPath } = useRouter();

  return (
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
  );
};
