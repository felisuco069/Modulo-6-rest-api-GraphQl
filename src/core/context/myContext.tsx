import React from 'react';
import { Context } from './context.model';

export const MyContext = React.createContext<Context>({
  page: 1,
  setPage: (value: number) => {},
});

export const MyContextProvider: React.FC = ({ children }) => {
  const [page, setPage] = React.useState(1);

  return (
    <MyContext.Provider value={{ page, setPage }}>
      {children}
    </MyContext.Provider>
  );
};
