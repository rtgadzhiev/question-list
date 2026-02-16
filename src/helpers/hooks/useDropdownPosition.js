import { useEffect, useRef, useState } from 'react';

function useDropdownPosition(dropdownRef) {
  const [position, setPosition] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const dropdown = dropdownRef.current;

    const calculatePosition = (ref) => {
      if (!ref) return;

      const rect = ref.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const position = rect.left < viewportWidth / 2 ? 'right' : 'left';

      return position;
    };

    setPosition(calculatePosition(dropdown));

    const handleResize = () => {
      const timeout = timeoutRef.current;
      if (timeout) {
        clearTimeout(timeout);
      }
      timeoutRef.current = setTimeout(() => {
        setPosition(calculatePosition(dropdown));
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [dropdownRef]);

  return position;
}

export default useDropdownPosition;
