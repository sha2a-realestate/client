'use client';

import { OptionSelect } from '@/components/common';
import { Container } from '@/components/layout';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import { FilterProperties } from './components';
import { PropertiesList } from './components/properties-list';

interface ResultsPageProps {}

export function ResultsPage({}: ResultsPageProps) {
  const translateLabel = useTranslations('label');
  const translatePlaceholder = useTranslations('placeholder');

  return (
    <Container>
      <FilterProperties />

      <div
        className={clsx(
          'my-4 flex flex-col items-start gap-2',
          'md:flex-row md:items-center md:justify-between'
        )}
      >
        <h1 className="text-xl font-semibold">
          {translateLabel('searchResultsCount', {
            results: 32
          })}
        </h1>

        <OptionSelect
          label={translatePlaceholder('sortPropertiesBy')}
          value={''}
          onValueChange={(x: string) => console.log(x)}
          options={[
            {
              value: 'most-viewed',
              label: translateLabel('mostViewed')
            },
            {
              value: 'most-recently',
              label: translateLabel('mostRecently')
            }
          ]}
        />
      </div>

      <Suspense fallback="Loading...">
        <PropertiesList />
      </Suspense>
    </Container>
  );
}
