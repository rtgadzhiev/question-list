import { createContext, useMemo } from 'react';

import useToggle from '../helpers/hooks/useToggle';

export const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [isFiltersOpen, toggleFilters] = useToggle(false);

  const value = useMemo(
    () => ({ isFiltersOpen, toggleFilters }),
    [isFiltersOpen, toggleFilters],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
