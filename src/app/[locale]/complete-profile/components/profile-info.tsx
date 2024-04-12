import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { ImageUpload } from './image-upload';
import { Form, Formik } from 'formik';
import { Input } from '@/components';
import CountryDropdown from '@/components/form/countries';
import StateDropdown from '@/components/form/states';

interface ProfileInfoFormProps {}

export function ProfileInfoForm({}: ProfileInfoFormProps) {
  const t = useTranslations();

  return (
    <Formik
      onSubmit={(values) => console.log(values)}
      initialValues={{ firstName: '', secondName: '', phoneNumber: '' }}
    >
      {({}) => (
        <Form className={clsx('flex flex-col w-full gap-6 max-w-lg')}>
          <ImageUpload />
          <div className="flex gap-4 w-full mt-8">
            <Input label={t('label.firstName')} name="firstName" type="text" />
            <Input label={t('label.secondName')} name="secondName" type="text" />
          </div>
          <CountryDropdown />
          <StateDropdown />
        </Form>
      )}
    </Formik>
  );
}
