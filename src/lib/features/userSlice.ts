import { createAppSlice } from '../createAppSlice';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

export interface UserSliceState {
  data: User | null;
}

const initialState: UserSliceState = {
  data: null
};

export const userSlice = createAppSlice({
  name: 'user',
  initialState,
  reducers: (create) => ({
    login: create.reducer((state, action: PayloadAction<{ user: User }>) => {
      const { user } = action.payload;
      state.data = { ...user };
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
  selectors: {
    selectUser: (state) => state.data
  }
});

export const { login } = userSlice.actions;

export const { selectUser } = userSlice.selectors;
