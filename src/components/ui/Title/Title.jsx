import clsx from 'clsx';
import styles from './Title.module.css';

function Title({ type = 'h1', children, className }) {
  return <h1 className={clsx(styles.h1, className)}>{children}</h1>;
}

export default Title;
