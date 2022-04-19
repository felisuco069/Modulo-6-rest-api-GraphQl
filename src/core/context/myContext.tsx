import React from 'react';
import { Context } from './context.model';

export const MyContext = React.createContext<Context>({
  page: 1,
  setPage: (value: number) => {},
  selection: '',
  setSelection: (value: string) => {},
  isViewPage: true,
  setIsViewPage: (value: boolean) => {},
  lastPage: 2,
  setLastPage: (value: number) => {},
});

export const MyContextProvider: React.FC = ({ children }) => {
  const [page, setPage] = React.useState(1);
  const [selection, setSelection] = React.useState(null);
  const [isViewPage, setIsViewPage] = React.useState(true);
  const [lastPage, setLastPage] = React.useState(42);

  return (
    <MyContext.Provider
      value={{
        page,
        setPage,
        selection,
        setSelection,
        isViewPage,
        setIsViewPage,
        lastPage,
        setLastPage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
