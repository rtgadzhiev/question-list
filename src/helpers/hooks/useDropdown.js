import { useRef, useState } from 'react';

function useDropdown(initialState) {
  const [isOpen, setIsOpen] = useState(initialState);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return [isOpen, toggleDropdown, dropdownRef];
}

export default useDropdown;
