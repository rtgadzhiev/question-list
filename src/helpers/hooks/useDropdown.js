import useClickOutside from './useClickOutside';
import { useState } from 'react';

function useDropdown(initialState) {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggleDropdown = (e) => {
    if (e.target) {
      console.log(e.target);
      setIsOpen((prev) => !prev);
    }
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const dropdownRef = useClickOutside(closeDropdown);

  return [isOpen, toggleDropdown, dropdownRef];
}

export default useDropdown;
