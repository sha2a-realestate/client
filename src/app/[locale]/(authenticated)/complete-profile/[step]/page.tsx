'use client';

import { Container } from '@/components';
import { CompeleteProfileStepsList, CompleteProfileStep } from '@/constants';
import { useParams } from 'next/navigation';
import { ProfileInfoForm } from './components/personal-info-form';
import { Stepper } from './components/stepper';

function CompleteProfileStepPage() {
  const params = useParams();
  const step = params.step as CompleteProfileStep;

  return (
    <Container className="min-h-[var(--body-height)] flex flex-col gap-y-8 items-center justify-center p-8">
      <Stepper currentStep={step as CompleteProfileStep} steps={CompeleteProfileStepsList} />
      {step === CompleteProfileStep.PersonalInfo && <ProfileInfoForm />}
      {step === CompleteProfileStep.AgentType && <div>Agent Type</div>}
    </Container>
  );
}

export default CompleteProfileStepPage;
