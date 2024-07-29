import React, { createContext, useState, ReactNode } from 'react';

interface FilterContextType {
  filter: string;
  setFilter: (filter: string) => void;
}

const Context = createContext<FilterContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filter, setFilter] = useState<string>('all');

  return (
    <Context.Provider value={{ filter, setFilter }}>
      {children}
    </Context.Provider>
  );
};

export const useFilter = () => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
