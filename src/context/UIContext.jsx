import { createContext, useMemo } from 'react';

import useClickOutside from '../helpers/hooks/useClickOutside';
import useToggle from '../helpers/hooks/useToggle';

export const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [isOpen, toggle, setIsOpen] = useToggle(false);
  console.log(isOpen);

  const closeFilters = () => setIsOpen(false);
  const ref = useClickOutside(closeFilters);

  const value = useMemo(
    () => ({ isOpen, setIsOpen, toggle, ref }),
    [isOpen, toggle, setIsOpen, ref],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
