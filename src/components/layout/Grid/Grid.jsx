import clsx from 'clsx';
import styles from './Grid.module.css';

function Grid({ className, children }) {
  return <div className={clsx(styles.grid, className)}>{children}</div>;
}

export default Grid;
