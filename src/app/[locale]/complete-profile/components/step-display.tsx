import { CompleteProfileStep } from '@/constants/steps';
import { ReactNode } from 'react';

type Step = { child: ReactNode; step_id: CompleteProfileStep };

type StepDisplayProps = {
  steps: Step[];
  currentStep: string;
};

export function StepDisplay({ steps, currentStep }: StepDisplayProps) {
  switch (currentStep) {
    case CompleteProfileStep.ProfileInfo:
      return steps.find((step) => step.step_id === CompleteProfileStep.ProfileInfo)?.child;

    case CompleteProfileStep.AgentType:
      return steps.find((step) => step.step_id === CompleteProfileStep.AgentType)?.child;
    default:
      return;
  }
}
