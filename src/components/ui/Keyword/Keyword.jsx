import styles from './Keyword.module.css';
import Link from '../Link/Link';

function Keyword({ title }) {
  return <Link className={styles.keyword}>{`#${title}`}</Link>;
}

export default Keyword;
