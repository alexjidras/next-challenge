import type { GetStaticPaths, GetStaticProps } from 'next';

import { useTranslation } from '@/hooks/useTranslation';
import { SharedStaticProps } from '@/types/SharedStaticProps';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="px-6 py-4">
      <h1 className="font-bold text-lg">{t('heading.about_us')}</h1>
    </div>
  );
}

const aboutSlugs: { [locale: string]: string } = {
  en: 'about',
  ro: 'despre',
};

export const getStaticPaths: GetStaticPaths = ({ locales = [] }) => {
  return {
    paths: locales.map((locale) => {
      const aboutSlug = aboutSlugs[locale] ?? aboutSlugs.en;

      return {
        params: { aboutSlug },
        locale,
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<SharedStaticProps> = async ({
  locales = [],
}) => {
  return {
    props: {
      pagePathnames: locales.reduce((acc, locale) => {
        const aboutSlug = aboutSlugs[locale] ?? aboutSlugs.en;

        return {
          ...acc,
          [locale]: `/${aboutSlug}`,
        };
      }, {}),
    },
  };
};
