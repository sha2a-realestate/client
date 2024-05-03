import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface PropertyTypeSelectProps {
  value: string;
  options: { value: string; label: string }[];
  label?: string;
  onValueChange: (value: string) => void;
}

export function OptionSelect({ value, onValueChange, options, label }: PropertyTypeSelectProps) {
  const { locale } = useParams();
  const t = useTranslations();

  return (
    <Select defaultValue={value} value={value} onValueChange={onValueChange}>
      <SelectTrigger dir={locale === 'ar' ? 'rtl' : 'ltr'} className="min-w-[240px] md:w-fit text-slate-500">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t('label.selectOption')}</SelectLabel>
          {options?.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
