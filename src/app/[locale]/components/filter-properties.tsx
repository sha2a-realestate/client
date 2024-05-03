'use client';

import { OptionSelect } from '@/components/common';
import { SubmitButton } from '@/components/form';
import { PropertyRoomList, PropertyTypeList } from '@/constants';
import clsx from 'clsx';
import { Form, Formik } from 'formik';
import { useTranslations } from 'next-intl';
import { LocationInput, SearchInput } from '.';
import { Container } from '../../../components/layout';
import { PriceRange } from './min-max-price';

interface FilterPropertiesProps {}

type InitialValues = {
  term: string;
  location: string;
  propertyType: string;
  rooms: string;
  minPrice: number | string;
  maxPrice: number | string;
};

export function FilterProperties({}: FilterPropertiesProps) {
  const t = useTranslations();

  const initialValues: InitialValues = {
    term: '',
    location: '',
    propertyType: '',
    rooms: '',
    minPrice: '',
    maxPrice: ''
  };

  return (
    <Container className="py-6">
      <Formik
        onSubmit={(v) => {
          console.log(v);
        }}
        initialValues={initialValues}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className={clsx('flex flex-col gap-2', 'md:flex-row md:gap-4')}>
              <SearchInput name="term" className="flex-1" />
              <LocationInput name="location" className="flex-1" />
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              <OptionSelect
                label={t('placeholder.selectPropertyPlaceholder')}
                value={values.propertyType}
                onValueChange={(propertyType) => setFieldValue('propertyType', propertyType)}
                options={PropertyTypeList}
              />
              <OptionSelect
                label={t('placeholder.selectRoomsPlaceholder')}
                value={values.rooms}
                onValueChange={(roomsCount) => setFieldValue('rooms', roomsCount)}
                options={PropertyRoomList}
              />
              <PriceRange
                maxPrice={values.maxPrice as number}
                minPrice={values.minPrice as number}
                onPriceChange={(min, max) => {
                  console.log(min, max);
                  setFieldValue('minPrice', min);
                  setFieldValue('maxPrice', max);
                }}
              />
              <SubmitButton title={t('label.search')} containerClassName="min-w-[240px]" />
            </div>
          </Form>
        )}
      </Formik>
      <div className="w-full bg-slate-100 h-[1px] mt-4" />
    </Container>
  );
}
