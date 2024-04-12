'use client';

/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */

import React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { cn } from '@/lib/utils';
import { Country, ICountry } from 'country-state-city';

import { useDropdownStore } from '@/lib/dropdown-store';

interface CountryDropdownProps {
  disabled?: boolean;
}

const CountryDropdown = ({ disabled }: CountryDropdownProps) => {
  const { countryValue, setCountryValue, openCountryDropdown, setOpenCountryDropdown } = useDropdownStore();
  const countries = Country.getAllCountries();
  const C = countries as ICountry[];

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
              <span>Select Country...</span>
            )}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] rounded-[6px] border shadow-md p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
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

export default CountryDropdown;
