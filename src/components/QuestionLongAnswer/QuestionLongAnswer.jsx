import styles from './QuestionLongAnswer.module.css';
import useQuestion from '../../helpers/hooks/useQuestion';
import Card from '../ui/Card/Card';
import Title from '../ui/Title/Title';
import useToggle from '../../helpers/hooks/useToggle';
import clsx from 'clsx';
import useHeightObserver from '../../helpers/hooks/useHeightObserver';
import arrow from '../../assets/images/icons/chevron-down-icon.svg';
import Skeleton from '../ui/Skeleton/Skeleton';

function QuestionLongAnswer() {
  const { question, isLoading } = useQuestion();
  const [isOpen, toggle] = useToggle(false);
  const { contentRef, height } = useHeightObserver();

  return (
    <Card className={styles.card} isShadow={true}>
      <Title type="h2">Развёрнутый ответ</Title>
      <div
        className={styles.answer}
        style={{ height: isOpen ? height + 45 : '400px' }}
      >
        <div ref={contentRef}>
          <div dangerouslySetInnerHTML={{ __html: question?.longAnswer }}></div>
        </div>
      </div>
      <button
        className={clsx(styles.button, { [styles.isOpen]: isOpen })}
        onClick={toggle}
      >
        <img
          className={clsx(styles.arrow, { [styles.isOpen]: isOpen })}
          src={arrow}
          alt=""
          width="20"
          height="20"
        />
        {isOpen ? 'Cвернуть' : 'Развернуть'}
      </button>
    </Card>
  );
}

export default QuestionLongAnswer;
