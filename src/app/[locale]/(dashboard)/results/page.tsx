import { Container } from '@/components/layout';
import clsx from 'clsx';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';
import { FilterProperties } from './components';
import { PropertiesList } from './components/properties-list';

export default async function Page() {
  const translateLabel = await getTranslations('label');

  return (
    <Container>
      <FilterProperties />

      <div className={clsx('my-4 flex flex-col items-start gap-2', 'md:flex-row md:items-center md:justify-between')}>
        <h1 className="text-xl font-semibold">
          {translateLabel('searchResultsCount', {
            results: 32
          })}
        </h1>

        {/* <OptionSelect
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
    /> */}
      </div>

      <Suspense fallback={'Loading.......'}>
        <PropertiesList />
      </Suspense>
    </Container>
  );
}
