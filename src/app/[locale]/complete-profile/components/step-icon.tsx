import { CheckIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

interface StepIconProps {
  completed: boolean;
  text?: string | number;
}

export function StepIcon({ completed, text }: StepIconProps) {
  return (
    <div
      className={clsx('font-bold w-14 h-14 text-white flex items-center justify-center rounded-full', {
        'bg-green-500': completed,
        "bg-primary": !completed
      })}
    >
      {completed ? <CheckIcon className="w-6 h-6 text-white" /> : text}
    </div>
  );
}
