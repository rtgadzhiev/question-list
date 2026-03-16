import styles from './QuestionControls.module.css';
import Card from '../ui/Card/Card';
import { useParams } from 'react-router';
import Link from '../ui/Link/Link';
import arrow from '../../assets/images/icons/controls-arrow-icon.svg';
import clsx from 'clsx';

function QuestionControls() {
  const { id } = useParams();

  return (
    <Card className={styles.controls} isShadow={true}>
      <Link className={styles.control} to={`/${+id - 1}`} replace>
        <img
          className={styles.arrow}
          src={arrow}
          alt=""
          width="24"
          height="24"
        />
        <span>Предыдущий</span>
      </Link>
      <Link className={styles.control} to={`/${+id + 1}`} replace>
        <span>Следующий</span>
        <img
          className={clsx(styles.arrow, styles.right)}
          src={arrow}
          alt=""
          width="24"
          height="24"
        />
      </Link>
    </Card>
  );
}

export default QuestionControls;
