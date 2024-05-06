import { Middleware, combineSlices, configureStore, type Action, type ThunkAction } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { authSlice } from './features/authSlice';
import { countryDropdownSlice } from './features/countryDropdownSlice';
import { stateDropdownSlice } from './features/stateDropdownSlice';
import { tokenValidityMiddleware } from './middlewares';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const rootReducer = combineSlices(authSlice, countryDropdownSlice, stateDropdownSlice);
export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      const customMiddleware: Middleware[] = [tokenValidityMiddleware];

      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }).concat(customMiddleware);
    }
  });

  const persistor = persistStore(store);
  return { store, persistor };
};

export const { store } = makeStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;
