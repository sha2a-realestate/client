import clsx from 'clsx';
import { MapPinIcon } from 'lucide-react';
import { Input } from '../../../components/ui';
import { useTranslations } from 'next-intl';

export interface LocationInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function LocationInput({ className, ...props }: LocationInputProps) {
  const t = useTranslations();
  
  return (
    <div className={clsx('relative', className)}>
      <MapPinIcon className="absolute mt-1.5 ms-3 w-5 h-5 text-gray-400 mr-2" />
      <Input className="ps-10" type="text" placeholder={t("placeholder.searchAddressPlaceholder")} {...props} />
    </div>
  );
}
