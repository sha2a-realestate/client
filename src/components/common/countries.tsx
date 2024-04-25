'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { cn } from '@/lib/utils';
import { Country, ICountry } from 'country-state-city';

import { useDropdownStore } from '@/lib/zustand/dropdown-store';
import { useTranslations } from 'next-intl';

interface CountryDropdownProps {
  disabled?: boolean;
}

export const CountryDropdown = ({ disabled }: CountryDropdownProps) => {
  const { countryValue, setCountryValue, openCountryDropdown, setOpenCountryDropdown } = useDropdownStore();
  const countries = Country.getAllCountries();
  const C = countries as ICountry[];
  const t = useTranslations();

  return (
    <Popover open={openCountryDropdown} onOpenChange={setOpenCountryDropdown}>
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
                      setCountryValue(currentValue);
                      setOpenCountryDropdown(false);
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
