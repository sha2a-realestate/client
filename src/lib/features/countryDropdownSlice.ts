import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../createAppSlice';

export interface CountryDropdownSlice {
  openCountryDropdown: boolean;
  countryValue: string;
}

const initialState: CountryDropdownSlice = {
  openCountryDropdown: false,
  countryValue: ''
};

export const countryDropdownSlice = createAppSlice({
  name: 'countryDropdown',
  initialState,
  reducers: (create) => ({
    setCountryValue: create.reducer((state, action: PayloadAction<string>) => {
      state.countryValue = action.payload;
    }),
    setOpenCountryDropdown: create.reducer((state, action: PayloadAction<boolean>) => {
      state.openCountryDropdown = action.payload;
    })
  }),
  selectors: {
    selectCountryDropdownState: (state) => state
  }
});

export const { setOpenCountryDropdown, setCountryValue } = countryDropdownSlice.actions;

export const { selectCountryDropdownState } = countryDropdownSlice.selectors;
