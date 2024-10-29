import type { GetStaticPaths, GetStaticProps } from 'next';

import { useTranslation } from '@/hooks/useTranslation';
import { SharedStaticProps } from '@/types/SharedStaticProps';

export default function About() {
  const { t } = useTranslation();

  return <h1>{t('heading.about_us')}</h1>;
}

const paths = [
  { params: { aboutSlug: 'about' }, locale: 'en' },
  { params: { aboutSlug: 'despre' }, locale: 'ro' },
];

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<SharedStaticProps> = async () => {
  return {
    props: {
      pagePathnames: paths.reduce(
        (acc, item) => ({
          ...acc,
          [item.locale]: `/${item.params.aboutSlug}`,
        }),
        {},
      ),
    },
  };
};
