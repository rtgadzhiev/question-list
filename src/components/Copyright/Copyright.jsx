import Link from '../Link/Link';
import clsx from 'clsx';
import styles from './Copyright.module.css';

function Copyright({ className }) {
  const currentYear = new Date().getFullYear();

  return (
    <small className={clsx(styles.copyright, className)}>
      <span>© {currentYear} YeaHub</span>
      <Link className={styles.copyrightLink} title={'Документы'} />
    </small>
  );
}

export default Copyright;
