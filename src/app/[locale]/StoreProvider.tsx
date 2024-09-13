'use client';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useEffect, useRef, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { makeStore } from '../../lib/store';

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  const storeRef = useRef<any>(null);
  const persistorRef = useRef<any>(null);

  if (!storeRef.current) {
    const { store, persistor } = makeStore();
    storeRef.current = store;
    persistorRef.current = persistor;
  }

  useEffect(() => {
    if (storeRef.current != null) {
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={''} persistor={persistorRef.current}>
        {children}
      </PersistGate>
    </Provider>
  );
};
