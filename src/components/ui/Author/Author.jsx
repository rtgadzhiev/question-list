import styles from './Author.module.css';
import Link from '../Link/Link';

function Author({ name }) {
  return <Link className={styles.author}>{name}</Link>;
}

export default Author;
