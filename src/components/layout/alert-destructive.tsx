import { AlertCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui';

interface AlertDestructive {
  title: string;
  description: string;
}

export function AlertDestructive({ title = 'Error', description = 'An error occured' }: AlertDestructive) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
