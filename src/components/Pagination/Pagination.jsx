import clsx from 'clsx';
import elipsis from '../../assets/images/icons/pagination/pagination-ellipsis.svg';
import leftArrow from '../../assets/images/icons/pagination/pagination-arrow-left.svg';
import rightArrow from '../../assets/images/icons/pagination/pagination-arrow-right.svg';
import styles from './Pagination.module.css';

function Pagination({
  currentPage,
  totalPages,
  paginationRange,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
}) {
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
