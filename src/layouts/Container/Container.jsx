import clsx from 'clsx';
import styles from './Container.module.css';

function Container({ className, children }) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}

export default Container;
