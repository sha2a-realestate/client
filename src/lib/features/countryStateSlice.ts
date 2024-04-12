interface DropdownStateProps {
  countryValue: string;
  stateValue: string;
  openCountryDropdown: boolean;
  openStateDropdown: boolean;
}

import { createAppSlice } from '../createAppSlice';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: DropdownStateProps = {
  countryValue: '',
  openCountryDropdown: false,
  stateValue: '',
  openStateDropdown: false
};

export const countryStateSlice = createAppSlice({
  name: 'countryState',
  initialState,
  reducers: (create) => ({
    setCountryValue: create.reducer((state, action: PayloadAction<string>) => {
      state.countryValue = action.payload;
    }),
    setStateValue: create.reducer((state, action: PayloadAction<string>) => {
      state.stateValue = action.payload;
    }),
    setOpenCountryDropdown: create.reducer((state, action: PayloadAction<boolean>) => {
      state.openCountryDropdown = action.payload;
    }),
    setOpenStateDropdown: create.reducer((state, action: PayloadAction<boolean>) => {
      state.openStateDropdown = action.payload;
    })
  }),
  selectors: {
    selectCountryStateDropdown: (state) => state
  }
});

export const { setCountryValue, setOpenCountryDropdown, setOpenStateDropdown, setStateValue } =
  countryStateSlice.actions;

export const { selectCountryStateDropdown } = countryStateSlice.selectors;
