import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/bookSlice';

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      user: bookSlice,
    },
    preloadedState,
  });

  return store;
}

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
