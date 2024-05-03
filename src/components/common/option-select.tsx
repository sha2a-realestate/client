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

interface PropertyTypeSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: { value: string; label: string }[];
  label?: string;
}

export function OptionSelect({ value, onValueChange, options, label }: PropertyTypeSelectProps) {
  return (
    <Select defaultValue={value} value={value} onValueChange={onValueChange}>
      <SelectTrigger className="min-w-[240px] md:w-fit text-slate-500">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select an option</SelectLabel>
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
