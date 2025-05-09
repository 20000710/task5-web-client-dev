import React, { createContext, useContext, useState } from 'react';

type GridViewContextType = {
  isGridView: boolean;
  toggleGridView: (value: boolean) => void;
};

const GridViewContext = createContext<GridViewContextType | undefined>(undefined);

export const GridViewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isGridView, setIsGridView] = useState(false);

  const toggleGridView = (value: boolean) => {
    setIsGridView(value);
  };

  return (
    <GridViewContext.Provider value={{ isGridView, toggleGridView }}>
      {children}
    </GridViewContext.Provider>
  );
};

export const useGridView = () => {
  const context = useContext(GridViewContext);
  if (!context) {
    throw new Error("useGridView must be used within a GridViewProvider");
  }
  return context;
};
