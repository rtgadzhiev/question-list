import { useState } from 'react';

export default function useOptions(initialLimit) {
  const [isOpen, setIsOpen] = useState(false);
  const [limit, setLimit] = useState(initialLimit);

  return { isOpen, setIsOpen, limit, setLimit };
}
