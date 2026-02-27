import clsx from 'clsx';
import elipsis from '../../assets/images/icons/pagination/pagination-ellipsis.svg';
import leftArrow from '../../assets/images/icons/pagination/pagination-arrow-left.svg';
import rightArrow from '../../assets/images/icons/pagination/pagination-arrow-right.svg';
import styles from './Pagination.module.css';
import { useEffect } from 'react';
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
      <button
        onClick={handlePreviousPage}
        className={styles.button}
        disabled={currentPage === 1}
      >
        <img
          className={styles.arrow}
          src={leftArrow}
          alt="Назад"
          width="28"
          height="28"
        />
      </button>
      {paginationRange?.map((pageNumber, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(pageNumber)}
          className={clsx(styles.button, {
            [styles.isActive]: pageNumber === currentPage,
          })}
          disabled={pageNumber === currentPage}
        >
          {pageNumber || <img src={elipsis} alt="" width="8" height="2" />}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className={styles.button}
        disabled={currentPage === totalPages}
      >
        <img
          className={styles.arrow}
          src={rightArrow}
          alt="Вперед"
          width="28"
          height="28"
        />
      </button>
    </div>
  );
}

export default Pagination;
