'use client';

import { Container } from '@/components';
import { CompeleteProfileStepsList, CompleteProfileStep } from '@/constants';
import { useParams } from 'next/navigation';
import { AgentTypeStep } from './components/agent-type-step';
import { ProfileInfoStep } from './components/personal-info-step';
import { Stepper } from './components/stepper';

function CompleteProfileStepPage() {
  const params = useParams();
  const step = params.step as CompleteProfileStep;

  return (
    <Container className="min-h-[var(--body-height)] flex flex-col gap-y-8 items-center justify-center p-8">
      <Stepper currentStep={step as CompleteProfileStep} steps={CompeleteProfileStepsList} />
      {step === CompleteProfileStep.PersonalInfo && <ProfileInfoStep />}
      {step === CompleteProfileStep.AgentType && <AgentTypeStep />}
    </Container>
  );
}

export default CompleteProfileStepPage;
