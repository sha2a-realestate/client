import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { ImageUpload } from './image-upload';
import { Form, Formik } from 'formik';
import { Input, SubmitButton } from '@/components';
import CountryDropdown from '@/components/form/countries';
import StateDropdown from '@/components/form/states';
import { useDropdownStore } from '@/lib/dropdown-store';
import { personalInfoValidationSchema } from '@/schemas';

interface ProfileInfoFormProps {}

export function ProfileInfoForm({}: ProfileInfoFormProps) {
  const t = useTranslations();
  const { countryValue, stateValue } = useDropdownStore();

  return (
    <Formik
      onSubmit={(values) => console.log({ ...values, country: countryValue, state: stateValue })}
      initialValues={{ firstName: '', secondName: '', phoneNumber: '', country: countryValue, state: stateValue }}
      validationSchema={personalInfoValidationSchema}
    >
      {({}) => (
        <Form className={clsx('flex flex-col w-full gap-6 max-w-md')}>
          <ImageUpload />
          <div className="flex gap-4 w-full mt-8">
            <Input placeholder="Saif" label={t('label.firstName')} name="firstName" type="text" />
            <Input placeholder="Mohamed" label={t('label.secondName')} name="secondName" type="text" />
          </div>
          <Input placeholder="+201206944093" label={t('label.phoneNumber')} name="phoneNumber" type="tel" />
          <CountryDropdown />
          <StateDropdown />
          <SubmitButton variant={'primary'} title="Next" />
        </Form>
      )}
    </Formik>
  );
}
