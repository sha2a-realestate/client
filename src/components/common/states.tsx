'use client';

/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */

import { IState, State } from 'country-state-city';
import { Check, ChevronsUpDown } from 'lucide-react';
import React from 'react';

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */

import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
  ScrollBar
} from '@/components/ui';

import { cn } from '@/lib/utils';
import { useDropdownStore } from '@/lib/zustand/dropdown-store';
import { useTranslations } from 'next-intl';

export const StateDropdown = () => {
  const { countryValue, stateValue, openStateDropdown, setOpenStateDropdown, setStateValue } = useDropdownStore();
  const states = State.getAllStates();
  const SD = states as IState[];
  const S = SD.filter((state) => state.countryCode === countryValue);
  const t = useTranslations();

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
            <span className="font-normal text-slate-500">{t('label.selectState')}</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] rounded-[6px] p-0">
        <Command>
          <CommandInput placeholder={t('label.selectState')} />
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
