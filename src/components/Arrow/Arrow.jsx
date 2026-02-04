import clsx from 'clsx';
import styles from './Arrow.module.css';

function Arrow({ className, arrow, width = 24, heigth = 24, isOpen }) {
  return (
    <img
      className={clsx(styles.arrow, { [styles.isOpen]: isOpen }, className)}
      src={arrow}
      alt={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      width={width}
      height={heigth}
    />
  );
}

export default Arrow;
