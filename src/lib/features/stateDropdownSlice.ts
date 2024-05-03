import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../createAppSlice';

export interface StateDropdownSlice {
  openStateDropdown: boolean;
  stateValue: string;
}

const initialState: StateDropdownSlice = {
  openStateDropdown: false,
  stateValue: ''
};

export const stateDropdownSlice = createAppSlice({
  name: 'stateDropdownSlice',
  initialState,
  reducers: (create) => ({
    setStateValue: create.reducer((state, action: PayloadAction<string>) => {
      state.stateValue = action.payload;
    }),
    setOpenStateDropdown: create.reducer((state, action: PayloadAction<boolean>) => {
      state.openStateDropdown = action.payload;
    })
  }),
  selectors: {
    selectStateDropdownState: (state) => state
  }
});

export const { setOpenStateDropdown, setStateValue } = stateDropdownSlice.actions;

export const { selectStateDropdownState } = stateDropdownSlice.selectors;
