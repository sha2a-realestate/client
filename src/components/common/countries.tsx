'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import React from 'react';

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
import { Country, ICountry } from 'country-state-city';

import {
  selectCountryDropdownState,
  setCountryValue,
  setOpenCountryDropdown
} from '@/lib/features/countryDropdownSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useTranslations } from 'next-intl';

interface CountryDropdownProps {
  disabled?: boolean;
}

export const CountryDropdown = ({ disabled }: CountryDropdownProps) => {
  const { countryValue, openCountryDropdown } = useAppSelector(selectCountryDropdownState);
  const dispatch = useAppDispatch();

  const countries = Country.getAllCountries();
  const C = countries as ICountry[];
  const t = useTranslations();

  return (
    <Popover open={openCountryDropdown} onOpenChange={(open: boolean) => dispatch(setOpenCountryDropdown(open))}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={openCountryDropdown}
          className="justify-between rounded-[6px]"
          disabled={disabled}
        >
          <span>
            {countryValue ? (
              <div className="flex items-end gap-2">
                <span>{C.find((country) => country.isoCode === countryValue)?.flag}</span>
                <span>{C.find((country) => country.isoCode === countryValue)?.name}</span>
              </div>
            ) : (
              <span className="font-normal text-slate-500">{t('label.selectCountry')}</span>
            )}
          </span>

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] rounded-[6px] border shadow-md p-0">
        <Command>
          <CommandInput placeholder={t('label.selectCountry')} />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <ScrollArea className="h-[300px] w-full">
              <CommandGroup>
                {C.map((country) => (
                  <CommandItem
                    key={country.name}
                    value={country.isoCode}
                    onSelect={(currentValue) => {
                      dispatch(setCountryValue(currentValue));
                      dispatch(setOpenCountryDropdown(false));
                    }}
                    className="flex cursor-pointer items-center justify-between text-xs"
                  >
                    <div className="flex items-end gap-2">
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                    </div>
                    <Check
                      className={cn('mr-2 h-4 w-4', countryValue === country.isoCode ? 'opacity-100' : 'opacity-0')}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
