'use client';

import { CompleteProfileStep, CompeleteProfileStepsList } from '@/constants';
import { StepDisplay } from './components/step-display';
import { Container } from '@/components';
import { Stepper } from './components/stepper';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ProfileInfoForm } from './components/profile-info';

interface CompleteProfilePageProps {}

export default function CompleteProfilePage({}: CompleteProfilePageProps) {
  const params = useSearchParams();
  const [currentStep] = useState(params.get('step'));

  return (
    <Container className="min-h-[var(--body-height)] flex flex-col gap-y-12 items-center justify-center">
      <Stepper currentStep={currentStep as string} steps={CompeleteProfileStepsList} />
      <StepDisplay
        currentStep={currentStep as string}
        steps={[
          { child: <ProfileInfoForm />, step_id: CompleteProfileStep.ProfileInfo },
          { child: <div>Step 2</div>, step_id: CompleteProfileStep.AgentType }
        ]}
      />
    </Container>
  );
}
