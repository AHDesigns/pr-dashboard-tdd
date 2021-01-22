import React, { createContext, FC } from 'react';

export type Pancakes = {
  subscribtions: number[];
};

export const dataContext = createContext({} as Pancakes);

export const DataProvider: FC = ({ children }) => {
  const data: Pancakes = { subscribtions: [] };
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};
