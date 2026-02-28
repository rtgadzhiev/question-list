import Pagination from '../ui/Pagination/Pagination';
import usePagination from '../../helpers/hooks/usePagination';
import useQuestions from '../../helpers/hooks/useQuestions';
import useQuestionsFilters from '../../helpers/hooks/useQuestionsFilters';

function QuestionsPagination() {
  const { questions, questionsFilters } = useQuestions();
  const { changeQuestionsFilters } = useQuestionsFilters();

  const { currentPage, totalPages, paginationRange } = usePagination(
    questionsFilters?.page,
    questions?.total,
    questionsFilters?.limit,
  );

  const handleNextPage = () => {
    if (questionsFilters.page < totalPages) {
      changeQuestionsFilters('page', questionsFilters.page + 1);
    }
  };
  const handlePreviousPage = () => {
    if (questionsFilters.page > 1) {
      changeQuestionsFilters('page', questionsFilters.page - 1);
    }
  };
  const handlePageClick = (pageNumber) => {
    changeQuestionsFilters('page', pageNumber);
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
