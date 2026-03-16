import styles from './QuestionLongAnswer.module.css';
import useQuestion from '../../helpers/hooks/useQuestion';
import Card from '../ui/Card/Card';
import Title from '../ui/Title/Title';
import useToggle from '../../helpers/hooks/useToggle';
import clsx from 'clsx';
import useHeightObserver from '../../helpers/hooks/useHeightObserver';
import arrow from '../../assets/images/icons/chevron-down-icon.svg';

function QuestionLongAnswer() {
  const { question } = useQuestion();
  const [isOpen, toggle] = useToggle(false);
  const { contentRef, height } = useHeightObserver();

  return (
    <Card className={styles.card} isShadow={true}>
      <Title type="h2">Развёрнутый ответ</Title>
      <div
        className={clsx(styles.answer, { [styles.isOpen]: isOpen })}
        style={{ height: isOpen ? height + 55 : '400px' }}
      >
        <div
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: question?.longAnswer }}
        ></div>
      </div>
      <button className={styles.button} onClick={toggle}>
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
