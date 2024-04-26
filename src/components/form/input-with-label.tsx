import { Input, Label } from '@/components/ui';

interface InputWithLabel extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function InputWithLabel({ id, label, ...props }: InputWithLabel) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input {...props} />
    </div>
  );
}
