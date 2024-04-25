import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { createAppSlice } from '../createAppSlice';

export interface AuthSliceState {
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: AuthSliceState = {
  user: null,
  isLoggedIn: false
};

export const authSlice = createAppSlice({
  name: 'auth',
  initialState,
  reducers: (create) => ({
    updateUserData: create.reducer((state, action: PayloadAction<{ user: User | null }>) => {
      const { user } = action.payload;
      state.isLoggedIn = user ? true : false;
      state.user = { ...user } as User;
    }),
    changeAuthState: create.reducer((state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    }),
    logout: create.reducer((state) => {
      state.user = null;
      state.isLoggedIn = false;
    })
  }),
  selectors: {
    selectUser: (state) => state.user,
    selectIsLoggedIn: (state) => state.isLoggedIn
  }
});

export const { updateUserData, logout, changeAuthState } = authSlice.actions;

export const { selectUser, selectIsLoggedIn } = authSlice.selectors;
