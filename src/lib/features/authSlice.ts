import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../createAppSlice';

export interface AuthSliceState {
  user: any;
  isLoggedIn: boolean;
  token: string | null;
}

const initialState: AuthSliceState = {
  user: null,
  token: null,
  isLoggedIn: false
};

export const authSlice = createAppSlice({
  name: 'auth',
  initialState,
  reducers: (create) => ({
    updateUserData: create.reducer((state, action: PayloadAction<{ user: any; token: string }>) => {
      const { user } = action.payload;
      state.isLoggedIn = user ? true : false;
      state.user = { ...user };
      state.token = action.payload.token;
    }),
    changeAuthState: create.reducer((state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    }),
    logout: create.reducer((state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.token = null;
    })
  }),
  selectors: {
    selectUser: (state) => state.user,
    selectIsLoggedIn: (state) => state.isLoggedIn
  }
});

export const { updateUserData, logout, changeAuthState } = authSlice.actions;

export const { selectUser, selectIsLoggedIn } = authSlice.selectors;
