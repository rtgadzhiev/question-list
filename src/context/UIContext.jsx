import { createContext, useMemo } from 'react';

import useClickOutside from '../helpers/hooks/useClickOutside';
import useToggle from '../helpers/hooks/useToggle';

export const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [isFiltersOpen, toggleFilters, setFiltersOpen] = useToggle(false);

  const closeFilters = () => setFiltersOpen(false);
  const filtersRef = useClickOutside(closeFilters);

  const value = useMemo(
    () => ({ isFiltersOpen, toggleFilters, filtersRef }),
    [isFiltersOpen, toggleFilters],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
