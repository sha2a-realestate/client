import { CompeleteProfileStepsListProps } from '@/constants';
import { StepIcon } from './step-icon';
import { DividerHorizontalIcon } from '@radix-ui/react-icons';

interface StepperProps {
  steps: CompeleteProfileStepsListProps[];
  currentStep: string;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-center gap-4">
      {steps?.map((step, idx) => (
        <>
        <StepIcon key={step.order} completed={isStepCompleted(currentStep, step, steps)} text={step.order} />
        {idx % 2 === 0 ? <DividerHorizontalIcon className='text-primary' /> : null}
        </>
      ))}
    </div>
  );
}

function isStepCompleted(
  currentStep: string,
  step: CompeleteProfileStepsListProps,
  steps: CompeleteProfileStepsListProps[]
): boolean {
  const currentStepIndex = steps.findIndex((item) => item.title === currentStep);
  const stepIndex = steps.findIndex((item) => item.title === step.title);

  if (currentStepIndex === -1 || stepIndex === -1) {
    return false;
  }

  return currentStepIndex >= stepIndex;
}
