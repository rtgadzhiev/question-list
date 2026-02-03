import clsx from 'clsx';
import styles from './Link.module.css';

function Link({ className, href = '#', title, isActive }) {
  return (
    <a
      className={clsx(styles.link, { [styles.isActive]: isActive }, className)}
      href={href}
    >
      {title}
    </a>
  );
}

export default Link;
