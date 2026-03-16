import clsx from 'clsx';
import styles from './Title.module.css';
import { TITLE_TAGS } from '../../../constants/constants';

function Title({ type = 'h1', children, className }) {
  const Tag = TITLE_TAGS[type];

  return (
    <Tag className={clsx(styles.title, styles[type], className)}>
      {children}
    </Tag>
  );
}

export default Title;
