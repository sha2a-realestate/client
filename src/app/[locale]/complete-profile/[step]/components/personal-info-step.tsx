'use client';
import { updateUser } from '@/app/actions/profile';
import { CountryDropdown, StateDropdown } from '@/components/common';
import { InputWithLabel, SubmitButton } from '@/components/form';
import { CompleteProfileStep, Routes } from '@/constants';
import { selectUser } from '@/lib/features/authSlice';
import { selectCountryDropdownState } from '@/lib/features/countryDropdownSlice';
import { selectStateDropdownState } from '@/lib/features/stateDropdownSlice';
import { useAppSelector } from '@/lib/hooks';
import { CompletePersonalInfo, CompletePersonalInfoSchema } from '@/lib/types';
import { useRouter } from '@/navigation';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';
import { ImageUpload } from './image-upload';

export function ProfileInfoStep() {
  const t = useTranslations();
  const { countryValue } = useAppSelector(selectCountryDropdownState);
  const { stateValue } = useAppSelector(selectStateDropdownState);

  const router = useRouter();
  const user = useAppSelector(selectUser);

  const clientAction = async (formData: FormData) => {
    try {
      const result = CompletePersonalInfoSchema.safeParse({
        firstName: formData.get('firstName'),
        secondName: formData.get('secondName'),
        phoneNumber: formData.get('phoneNumber'),
        country: countryValue,
        state: stateValue
      });

      if (!result.success) {
        result.error.issues.forEach((issue: any) => {
          toast.error(issue.path[0] + ': ' + issue.message + '.\n');
        });
        return;
      }

      await updateUser({
        ...(result.data as CompletePersonalInfo),
        email: user.email as string,
        userId: user.id as string
      });

      toast.success('User updated successfully');

      router.push(Routes.CompleteProfile(CompleteProfileStep.AgentType));
    } catch (error: any) {
      toast.error(t(`errors.${error.message}`));
    }
  };

  return (
    <form action={clientAction} className={clsx('flex w-full max-w-md flex-col gap-4')}>
      <ImageUpload />
      <div className="mt-8 flex w-full gap-4">
        <InputWithLabel
          label={t('label.firstName')}
          placeholder={t('placeholder.firstNamePlaceholder')}
          name="firstName"
          type="text"
        />
        <InputWithLabel
          label={t('label.secondName')}
          placeholder={t('placeholder.lastNamePlaceholder')}
          name="secondName"
          type="text"
        />
      </div>
      <InputWithLabel
        placeholder={t('placeholder.phoneNumberPlaceholder')}
        label={t('label.phoneNumber')}
        name="phoneNumber"
        type="text"
      />
      <CountryDropdown />
      <StateDropdown />
      <SubmitButton title={t('label.next')} />
    </form>
  );
}
