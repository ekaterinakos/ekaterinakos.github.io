import React from 'react';
import { StoreContext } from '../context/StoreConext';

export const Provider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
