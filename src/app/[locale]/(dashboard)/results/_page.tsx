'use client';

import { OptionSelect } from '@/components/common';
import { Container } from '@/components/layout';
import { useTranslations } from 'next-intl';
import { FilterProperties } from '../../components';

interface ResultsPageProps {}

export function ResultsPage({}: ResultsPageProps) {
  const translateLabel = useTranslations('label');
  const translatePlaceholder = useTranslations('placeholder');

  return (
    <Container>
      <FilterProperties />
      <div className="mt-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">{translateLabel('searchResultsCount', { results: 32 })}</h1>
        <OptionSelect
          label={translatePlaceholder('sortPropertiesBy')}
          value={''}
          onValueChange={(x: string) => console.log(x)}
          options={[
            { value: 'most-viewed', label: translateLabel('mostViewed') },
            { value: 'most-recently', label: translateLabel('mostRecently') }
          ]}
        />
      </div>
    </Container>
  );
}
