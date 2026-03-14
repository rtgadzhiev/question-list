import Pagination from '../ui/Pagination/Pagination';
import usePagination from '../../helpers/hooks/usePagination';
import { useSearchParams } from 'react-router';
import useQuestions from '../../helpers/hooks/useQuestions';

function QuestionsPagination() {
  const { questions } = useQuestions();
  const [seatchParams, setSearchParams] = useSearchParams();
  const page = +seatchParams.get('page') || 1;

  const { currentPage, totalPages, paginationRange } = usePagination(
    page,
    questions?.total,
  );

  const handleNextPage = () => {
    if (page < totalPages) {
      const newParams = new URLSearchParams(seatchParams);
      newParams.set('page', page + 1);
      setSearchParams(newParams);
    }
  };
  const handlePreviousPage = () => {
    if (page > 1) {
      const newParams = new URLSearchParams(seatchParams);
      if (page - 1 === 1) {
        newParams.delete('page');
      } else {
        newParams.set('page', page - 1);
      }
      setSearchParams(newParams);
    }
  };
  const handlePageClick = (pageNumber) => {
    const newParams = new URLSearchParams(seatchParams);
    if (pageNumber === 1) {
      newParams.delete('page');
    } else {
      newParams.set('page', pageNumber);
    }
    setSearchParams(newParams);
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      paginationRange={paginationRange}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePageClick={handlePageClick}
    />
  );
}

export default QuestionsPagination;
