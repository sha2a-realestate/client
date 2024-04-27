'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { LocationInput, SearchInput, SubmitButton } from '../../../components/form';
import { Container } from '../../../components/layout';
import { PriceRange } from './min-max-price';
import { PropertyTypeSelect } from './property-type-select';
import { RoomsSelect } from './rooms-select';

interface FilterPropertiesProps {}

export function FilterProperties({}: FilterPropertiesProps) {
  const t = useTranslations();
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  // TODO: form + store
  return (
    <Container>
      <div className="py-6">
        <div className={clsx('flex flex-col gap-2', 'md:flex-row md:gap-4')}>
          <SearchInput className="flex-1" onChange={(e) => console.log(e)} />
          <LocationInput className="flex-1" onChange={(e) => console.log(e)} />
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          <PropertyTypeSelect />
          <RoomsSelect />
          <PriceRange
            maxPrice={maxPrice as number}
            minPrice={minPrice as number}
            onPriceChange={(min, max) => {
              setMinPrice(min);
              setMaxPrice(max);
            }}
          />
          <SubmitButton title={t('label.search')} containerClassName="min-w-[240px]" />
        </div>
      </div>
    </Container>
  );
}
