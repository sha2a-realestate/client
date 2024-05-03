'use client';
import { CountryDropdown, StateDropdown } from '@/components/common';
import { InputHandler, SubmitButton } from '@/components/form';
import { CompleteProfileStep, Routes } from '@/constants';
import { selectUser } from '@/lib/features/authSlice';
import { selectCountryDropdownState } from '@/lib/features/countryDropdownSlice';
import { selectStateDropdownState } from '@/lib/features/stateDropdownSlice';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from '@/navigation';
import { personalInfoValidationSchema } from '@/schemas';
import { updateUserData } from '@/services/api/updateUserData';
import clsx from 'clsx';
import { Form, Formik } from 'formik';
import { useTranslations } from 'next-intl';
import { ImageUpload } from './image-upload';

interface ProfileInfoStepProps {
  isSubmitting?: boolean;
}

interface InitialValuesType {
  firstName: string;
  secondName: string;
  phoneNumber: string;
  country?: string;
  state?: string;
}

const InitialValues: InitialValuesType = { firstName: '', secondName: '', phoneNumber: '' };

export function ProfileInfoStep({}: ProfileInfoStepProps) {
  const t = useTranslations();
  const { countryValue } = useAppSelector(selectCountryDropdownState);
  const { stateValue } = useAppSelector(selectStateDropdownState);

  const router = useRouter();
  const user = useAppSelector(selectUser);

  const handleSubmit = async (values: InitialValuesType) => {
    const updatedData = { ...values, country: countryValue, state: stateValue };
    await updateUserData({ data: updatedData, uid: user?.uid });
    router.push(Routes.CompleteProfile(CompleteProfileStep.AgentType));
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={InitialValues} validationSchema={personalInfoValidationSchema}>
      {({ isSubmitting }) => (
        <Form className={clsx('flex flex-col w-full gap-4 max-w-md')}>
          <ImageUpload />
          <div className="flex gap-4 w-full mt-8">
            <InputHandler
              label={t('label.firstName')}
              placeholder={t('placeholder.firstNamePlaceholder')}
              name="firstName"
              type="text"
            />
            <InputHandler
              label={t('label.secondName')}
              placeholder={t('placeholder.lastNamePlaceholder')}
              name="secondName"
              type="text"
            />
          </div>
          <InputHandler
            placeholder={t('placeholder.phoneNumberPlaceholder')}
            label={t('label.phoneNumber')}
            name="phoneNumber"
            type="text"
          />
          <CountryDropdown />
          <StateDropdown />
          <SubmitButton loading={isSubmitting} title={t('label.next')} />
        </Form>
      )}
    </Formik>
  );
}
