import clsx from 'clsx';
import styles from './AccordeonArrow.module.css';

function AccordeonArrow({ className, arrow, width = 24, heigth = 24, isOpen }) {
  return (
    <img
      className={clsx(
        styles.accordeonArrow,
        { [styles.isOpen]: isOpen },
        className,
      )}
      src={arrow}
      alt={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      width={width}
      height={heigth}
    />
  );
}

export default AccordeonArrow;
