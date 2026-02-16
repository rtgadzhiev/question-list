import { LIMIT } from '../../constants/constants';
import getPaginationRange from '../getPaginationRange';
import { useMemo } from 'react';

function usePagination(currentPage, totalQuestions = 1, limit = LIMIT) {
  const getTotalPages = (totalQuestions, limit) => {
    return Math.ceil(totalQuestions / limit);
  };

  const totalPages = useMemo(() => {
    if (!totalQuestions) return 1;

    return getTotalPages(totalQuestions, limit);
  }, [totalQuestions, limit]);

  const paginationRange = useMemo(() => {
    if (totalPages === 1) return [1];

    return getPaginationRange(currentPage, totalPages);
  }, [currentPage, totalPages]);

  return { totalPages, paginationRange };
}

export default usePagination;
