import clsx from 'clsx';
import styles from './Link.module.css';

function Link({ className, href = '#', children, isActive, tabIndex }) {
  return (
    <a
      className={clsx(styles.link, { [styles.isActive]: isActive }, className)}
      href={href}
      tabIndex={tabIndex}
    >
      {children}
    </a>
  );
}

export default Link;
