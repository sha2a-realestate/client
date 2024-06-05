import { Container } from '@/components/layout';
import { CompeleteProfileStepsList, CompleteProfileStep } from '@/constants';
import { AgentTypeStep } from './components/agent-type-step';
import { ProfileInfoStep } from './components/personal-info-step';
import { Stepper } from './components/stepper';

type CompleteProfileStepPageProps = {
  params: {
    step: CompleteProfileStep;
  };
};

function CompleteProfileStepPage({ params: { step } }: CompleteProfileStepPageProps) {
  return (
    <Container className="flex min-h-[var(--body-height)] flex-col items-center justify-center gap-y-8 p-8">
      <Stepper currentStep={step as CompleteProfileStep} steps={CompeleteProfileStepsList} />
      {step === CompleteProfileStep.PersonalInfo && <ProfileInfoStep />}
      {step === CompleteProfileStep.AgentType && <AgentTypeStep />}
    </Container>
  );
}

export default CompleteProfileStepPage;
