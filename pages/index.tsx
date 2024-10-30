import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="px-6 py-4">
      <h1 className="font-bold text-lg">
        {t('heading.welcome', { params: { name: 'Alex' } })}
      </h1>
    </div>
  );
}
