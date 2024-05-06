import { Middleware } from '@reduxjs/toolkit';
import jwt from 'jsonwebtoken';
import { logout } from './features/authSlice';
import { RootState } from './store';

let isTokenValidating = false;

export const tokenValidityMiddleware: Middleware<{}, RootState> =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    const { token } = getState().auth;

    if (isTokenValidating) {
      return next(action);
    }

    isTokenValidating = true;

    if (token) {
      try {
        const secretKey = process.env.JWT_SECRET as jwt.Secret;
        console.log(secretKey);
        const decodedToken = jwt.verify(token, secretKey, {
          allowInvalidAsymmetricKeyTypes: true
        }) as { [key: string]: any };
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
