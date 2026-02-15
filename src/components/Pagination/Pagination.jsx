import clsx from 'clsx';
import elipsis from '../../assets/images/icons/pagination/pagination-ellipsis.svg';
import getPaginationRange from '../../helpers/getPaginationRange';
import leftArrow from '../../assets/images/icons/pagination/pagination-arrow-left.svg';
import rightArrow from '../../assets/images/icons/pagination/pagination-arrow-right.svg';
import styles from './Pagination.module.css';

function Pagination({}) {
  const range = getPaginationRange(6, 24);
  let isActive = 6;

  return (
    <div className={styles.pagination}>
      <button className={styles.button}>
        <img
          className={styles.arrow}
          src={leftArrow}
          alt="Назад"
          width="28"
          height="28"
        />
      </button>
      {range.map((pageNumber) => (
        <button
          key={pageNumber}
          className={clsx(styles.button, {
            [styles.isActive]: pageNumber === isActive,
          })}
        >
          {pageNumber || <img src={elipsis} alt="" width="8" height="2" />}
        </button>
      ))}
      <button className={styles.button}>
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
