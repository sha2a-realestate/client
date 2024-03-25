import { Input } from '@/components/form/text-input';
import { Label } from '@/components/ui/label';

interface InputWithLabel extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function InputWithLabel({ type, id, label, name, placeholder, ...props }: InputWithLabel) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} type={type} id={id} placeholder={placeholder} {...props} />
    </div>
  );
}
