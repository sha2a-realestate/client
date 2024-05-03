'use client';

import { IState, State } from 'country-state-city';
import { Check, ChevronsUpDown } from 'lucide-react';

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

import { selectCountryDropdownState } from '@/lib/features/countryDropdownSlice';
import { selectStateDropdownState, setOpenStateDropdown, setStateValue } from '@/lib/features/stateDropdownSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export const StateDropdown = () => {
  const { countryValue } = useAppSelector(selectCountryDropdownState);
  const { openStateDropdown, stateValue } = useAppSelector(selectStateDropdownState);
  const dispatch = useAppDispatch();

  const states = State.getAllStates();
  const SD = states as IState[];
  const S = SD.filter((state) => state.countryCode === countryValue);
  const t = useTranslations();

  return (
    <Popover open={openStateDropdown} onOpenChange={(open: boolean) => dispatch(setOpenStateDropdown(open))}>
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
                      dispatch(setStateValue(currentValue));
                      dispatch(setOpenStateDropdown(false));
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
