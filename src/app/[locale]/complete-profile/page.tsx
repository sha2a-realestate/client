'use client';

import { Container } from '@/components';
import ProtectedRoute from '@/components/layout/route-protection';
import { CompeleteProfileStepsList, CompleteProfileStep } from '@/constants';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ProfileInfoForm } from './components/profile-info';
import { StepDisplay } from './components/step-display';
import { Stepper } from './components/stepper';

interface CompleteProfilePageProps {}

export default function CompleteProfilePage({}: CompleteProfilePageProps) {
  const params = useSearchParams();
  const [currentStep] = useState(params.get('step'));

  return (
    <ProtectedRoute>
      <Container className="min-h-[var(--body-height)] flex flex-col gap-y-8 items-center justify-center p-8">
        <Stepper currentStep={currentStep as string} steps={CompeleteProfileStepsList} />
        <StepDisplay
          currentStep={currentStep as string}
          steps={[
            { child: <ProfileInfoForm />, step_id: CompleteProfileStep.ProfileInfo },
            { child: <div>Step 2</div>, step_id: CompleteProfileStep.AgentType }
          ]}
        />
      </Container>
    </ProtectedRoute>
  );
}
