import { useState } from 'react';

function useAccordion() {
  const [openIds, setOpenIds] = useState(new Set());

  const toggleItem = (id) => {
    setOpenIds((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }

      return newSet;
    });
  };

  const isOpen = (id) => openIds.has(id);

  return { isOpen, toggleItem };
}

export default useAccordion;
