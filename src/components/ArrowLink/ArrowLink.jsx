import Link from '../Link/Link';
import arrow from '../../assets/images/icons/link-arrow-icon.svg';
import clsx from 'clsx';
import styles from './ArrowLink.module.css';

function ArrowLink({ className, title }) {
  return (
    <Link className={clsx(styles.link, className)} href="#">
      <span>{title}</span>
      <img className={styles.arrow} src={arrow} alt="" width="24" height="24" />
    </Link>
  );
}

export default ArrowLink;
