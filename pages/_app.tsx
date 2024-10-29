import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Layout } from '../components/Layout';
import { TranslationProvider } from '@/context/TranslationContext';

import enTranslations from '@/locales/en/translations.json';
import roTranslations from '@/locales/ro/translations.json';
import { SharedStaticProps } from '@/types/SharedStaticProps';

const translations = {
  en: enTranslations,
  ro: roTranslations,
};

export default function App({
  Component,
  pageProps,
}: AppProps<SharedStaticProps>) {
  return (
    <TranslationProvider resources={translations}>
      <Layout pagePathnames={pageProps.pagePathnames}>
        <Component {...pageProps} />
      </Layout>
    </TranslationProvider>
  );
}
