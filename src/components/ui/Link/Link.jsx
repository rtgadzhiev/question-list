import clsx from 'clsx';
import styles from './Link.module.css';

function Link({ className, href = '#', children, isActive }) {
  return (
    <a
      className={clsx(styles.link, { [styles.isActive]: isActive }, className)}
      href={href}
    >
      {children}
    </a>
  );
}

export default Link;
