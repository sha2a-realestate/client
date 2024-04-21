import { Input, SubmitButton } from '@/components';
import CountryDropdown from '@/components/form/countries';
import StateDropdown from '@/components/form/states';
import { CompleteProfileStep, Routes } from '@/constants';
import { selectUser } from '@/lib/features/userSlice';
import { useAppSelector } from '@/lib/hooks';
import { useDropdownStore } from '@/lib/zustand/dropdown-store';
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
  const { countryValue, stateValue } = useDropdownStore();
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
            <Input
              label={t('label.firstName')}
              placeholder={t('placeholder.firstNamePlaceholder')}
              name="firstName"
              type="text"
            />
            <Input
              label={t('label.secondName')}
              placeholder={t('placeholder.lastNamePlaceholder')}
              name="secondName"
              type="text"
            />
          </div>
          <Input
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
