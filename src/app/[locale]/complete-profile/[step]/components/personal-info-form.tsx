import { Input, SubmitButton } from '@/components';
import CountryDropdown from '@/components/form/countries';
import StateDropdown from '@/components/form/states';
import { CompleteProfileStep, Routes } from '@/constants';
import { useDropdownStore } from '@/lib/dropdown-store';
import { selectUser } from '@/lib/features/userSlice';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from '@/navigation';
import { personalInfoValidationSchema } from '@/schemas';
import { updateUserData } from '@/services/api/updateUserData';
import clsx from 'clsx';
import { Form, Formik } from 'formik';
import { useTranslations } from 'next-intl';
import { ImageUpload } from './image-upload';

interface ProfileInfoFormProps {}

export function ProfileInfoForm({}: ProfileInfoFormProps) {
  const t = useTranslations();
  const { countryValue, stateValue } = useDropdownStore();
  const user = useAppSelector(selectUser);
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    await updateUserData({ data: { ...values, country: countryValue, state: stateValue }, uid: user?.uid });
    router.push(Routes.CompleteProfile(CompleteProfileStep.AgentType));
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ firstName: '', secondName: '', phoneNumber: '', country: countryValue, state: stateValue }}
      //TODO: build zustand or redux store for this form
      validationSchema={personalInfoValidationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={clsx('flex flex-col w-full gap-4 max-w-md')}>
          <ImageUpload />
          <div className="flex gap-4 w-full mt-8">
            <Input label={t('label.firstName')} name="firstName" type="text" />
            <Input label={t('label.secondName')} name="secondName" type="text" />
          </div>
          <Input label={t('label.phoneNumber')} name="phoneNumber" type="tel" />
          <CountryDropdown />
          <StateDropdown />
          <SubmitButton loading={isSubmitting} title={t('label.next')} />
        </Form>
      )}
    </Formik>
  );
}
