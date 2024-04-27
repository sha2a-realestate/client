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
import { PropertyTypeList } from '@/constants';

export function PropertyTypeSelect() {
  return (
    <Select>
      <SelectTrigger className="min-w-[240px] md:w-fit text-slate-500">
        <SelectValue placeholder="Select property type." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Property Type</SelectLabel>
          {PropertyTypeList.map((propertyType) => (
            <SelectItem key={propertyType} value={propertyType}>
              {propertyType}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
