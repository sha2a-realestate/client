import { Middleware } from '@reduxjs/toolkit';
import jwt from 'jsonwebtoken';
import { logout } from './features/authSlice';
import { RootState } from './store';

// export const tokenValidityMiddleware: Middleware<{}, RootState> =
//   ({ getState, dispatch }) =>
//   (next) =>
//   (action) => {
//     const { token } = getState().auth;

//     console.log(token);

//     const decodedToken = decrypt(token as string);

//     if (!decodedToken) {
//       dispatch(logout());
//     }

//     if (!Object.keys(decodedToken as Object).length) {
//       dispatch(logout());
//     }

//     return next(action);
//   };

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
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret) as { [key: string]: any };
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
