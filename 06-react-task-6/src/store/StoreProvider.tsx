import React from 'react';
import { createStore } from '.';
import { Provider } from 'react-redux';

const StoreProvider = ({ children, preloadedState }: any) => {
  const store = createStore(preloadedState);
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
