import { useCallback, useState } from 'react';

function useAccordion() {
  const [openIds, setOpenIds] = useState(new Set());

  const toggle = useCallback(
    (id) => {
      setOpenIds((prev) => {
        const newSet = new Set(prev);

        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }

        return newSet;
      });
    },
    [setOpenIds],
  );

  const isOpen = useCallback((id) => openIds.has(id), [openIds]);

  return { isOpen, toggle };
}

export default useAccordion;
