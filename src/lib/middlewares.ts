import { Middleware } from '@reduxjs/toolkit';
import { logout } from './features/authSlice';
import { RootState } from './store';
import { decryptToken } from './utils';

let isTokenValidating = false;

export const tokenValidityMiddleware: Middleware<{}, RootState> =
  ({ getState, dispatch }) =>
  (next) =>
  async (action) => {
    const { token } = getState().auth;

    if (isTokenValidating) {
      return next(action);
    }

    isTokenValidating = true;

    if (token) {
      try {
        const decodedToken = await decryptToken(token);
        console.log(decodedToken);

        if (decodedToken && Object.keys(decodedToken).length > 0) {
          isTokenValidating = false;
          return next(action);
        }
      } catch (error) {
        console.log(error);
        dispatch(logout());
        isTokenValidating = false;
        return;
      }
    }

    dispatch(logout());
    isTokenValidating = false;
    return next(action);
  };
