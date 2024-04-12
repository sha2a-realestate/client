'use client';

/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */

import React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { State, IState } from 'country-state-city';

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { cn } from '@/lib/utils';
import { useDropdownStore } from '@/lib/dropdown-store';

const StateDropdown = () => {
  const { countryValue, stateValue, openStateDropdown, setOpenStateDropdown, setStateValue } = useDropdownStore();
  const states = State.getAllStates();
  const SD = states as IState[];
  const S = SD.filter((state) => state.countryCode === countryValue);

  return (
    <Popover open={openStateDropdown} onOpenChange={setOpenStateDropdown}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={openStateDropdown}
          className="cursor-pointer justify-between rounded-[6px]"
          disabled={!countryValue || S.length === 0}
        >
          {stateValue ? (
            <div className="flex items-end gap-2">
              <span>{S.find((state) => state.isoCode === stateValue)?.name}</span>
            </div>
          ) : (
            <span>Select State...</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] rounded-[6px] p-0">
        <Command>
          <CommandInput placeholder="Search state..." />
          <CommandList>
            <CommandEmpty>No state found.</CommandEmpty>
            <ScrollArea className="h-[300px] w-full">
              <CommandGroup>
                {S.map((state) => (
                  <CommandItem
                    key={state.name}
                    value={state.isoCode}
                    onSelect={(currentValue) => {
                      setStateValue(currentValue);
                      setOpenStateDropdown(false);
                    }}
                    className="flex cursor-pointer items-center justify-between text-xs"
                  >
                    <div className="flex items-end gap-2">
                      <span className="">{state.name}</span>
                    </div>
                    <Check className={cn('mr-2 h-4 w-4', stateValue === state.isoCode ? 'opacity-100' : 'opacity-0')} />
                  </CommandItem>
                ))}
                <ScrollBar orientation="vertical" />
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default StateDropdown;
