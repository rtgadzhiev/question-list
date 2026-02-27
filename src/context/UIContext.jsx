import { createContext, useMemo, useState } from 'react';

export const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const toggleFilters = () => {
    setIsFiltersOpen((prev) => !prev);
  };

  const value = useMemo(
    () => ({ isFiltersOpen, toggleFilters }),
    [isFiltersOpen, setIsFiltersOpen],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
