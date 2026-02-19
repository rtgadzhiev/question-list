import { useState } from 'react';

function useFilters(initialFilters) {
  const [filters, setFilters] = useState(initialFilters);

  const changeFilters = (key, value) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return [filters, changeFilters];
}

export default useFilters;
