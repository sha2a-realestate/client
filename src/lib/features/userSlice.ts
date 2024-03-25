import { createAppSlice } from '../createAppSlice';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

export interface UserSliceState {
  user: {} | null;
}

const initialState: UserSliceState = {
  user: null
};

export const userSlice = createAppSlice({
  name: 'counter',
  initialState,
  reducers: (create) => ({
    login: create.reducer((state, action: PayloadAction<{ user: User }>) => {
      const { user } = action.payload;
      state.user = { ...user };
    })

    // thunkAction: create.asyncThunk(
    //   async (data: any) => {
    //     // const response = await fetchCount(amount);
    //     // return response.data;
    //   },
    //   {
    //     pending: (state) => {},
    //     fulfilled: (state, action) => {},
    //     rejected: (state) => {}
    //   }
    // )
  }),
  selectors: {}
});

export const { login } = userSlice.actions;

export const {} = userSlice.selectors;
