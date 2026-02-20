import useFetch from './useFetch';
import useFilters from './useFilters';
import { useState } from 'react';

function useOptions(fetchFunction, initialFilters) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, changeFilters] = useFilters(initialFilters);
  const [options, isLoading] = useFetch(fetchFunction, filters);

  return { options, isLoading, filters, changeFilters, isOpen, setIsOpen };
}

export default useOptions;
