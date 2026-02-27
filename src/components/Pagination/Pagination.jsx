import Button from '../ui/Button/Button';
import PaginationArrow from '../ui/PaginationArrow/PaginationArrow';
import clsx from 'clsx';
import elipsis from '../../assets/images/icons/pagination/pagination-ellipsis.svg';
import styles from './Pagination.module.css';
import usePagination from '../../helpers/hooks/usePagination';
import useQuestions from '../../helpers/hooks/useQuestions';
import useQuestionsFilters from '../../helpers/hooks/useQuestionsFilters';

function Pagination() {
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
    <div className={styles.pagination}>
      <PaginationArrow
        direction="left"
        handlePreviousPage={handlePreviousPage}
        currentPage={currentPage}
      />
      {paginationRange.length > 1 ? (
        paginationRange?.map((pageNumber, index) =>
          pageNumber ? (
            <Button
              key={index}
              onClick={() => handlePageClick(pageNumber)}
              className={clsx(styles.button, {
                [styles.isActive]: pageNumber === currentPage,
              })}
              isDisabled={pageNumber === currentPage}
            >
              {pageNumber}
            </Button>
          ) : (
            <img key={index} src={elipsis} alt="" width="8" height="2" />
          ),
        )
      ) : (
        <Button className={styles.isActive} isDisabled={true}>
          1
        </Button>
      )}
      <PaginationArrow
        direction="right"
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Pagination;
