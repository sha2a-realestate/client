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

export function RoomsSelect() {
  return (
    <Select>
      <SelectTrigger className="min-w-[240px] md:w-fit text-slate-500">
        <SelectValue placeholder="Select a room" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Rooms</SelectLabel>
          <SelectItem value="1">1 Room (Studio)</SelectItem>
          <SelectItem value="2">2 Rooms</SelectItem>
          <SelectItem value="3">3 Rooms</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
