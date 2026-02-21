import { useCallback, useEffect, useState } from 'react';

function useFilters(initialFilters) {
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filters]);

  const changeFilters = useCallback((key, value) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  }, []);

  return [filters, changeFilters];
}

export default useFilters;
