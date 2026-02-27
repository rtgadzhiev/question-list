import Button from '../Button/Button';
import leftArrow from '../../../assets/images/icons/pagination/pagination-arrow-left.svg';
import rightArrow from '../../../assets/images/icons/pagination/pagination-arrow-right.svg';
import styles from './PaginationArrow.module.css';

function PaginationArrow({
  direction,
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}) {
  return (
    <Button
      onClick={direction === 'left' ? handlePreviousPage : handleNextPage}
      isDisabled={
        direction === 'left' ? currentPage === 1 : currentPage === totalPages
      }
    >
      <img
        className={styles.arrow}
        src={direction === 'left' ? leftArrow : rightArrow}
        alt={direction === 'left' ? 'Назад' : 'Вперед'}
        width="28"
        height="28"
      />
    </Button>
  );
}

export default PaginationArrow;
