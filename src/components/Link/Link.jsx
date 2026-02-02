import clsx from 'clsx';
import styles from './Link.module.css';

function Link({ className, href = '#', title }) {
  return (
    <a className={clsx(styles.link, className)} href={href}>
      {title}
    </a>
  );
}

export default Link;
