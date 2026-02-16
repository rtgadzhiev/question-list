import { LIMIT } from '../../constants/constants';
import QuestionsAccordionItem from '../QuestionsAccordionItem/QuestionsAccordionItem';
import Skeleton from '../Skeleton/Skeleton';
import styles from './QuestionsAccordion.module.css';
import useAccordion from '../../helpers/hooks/useAccordion';

function QuestionsAccordion({ questions, isLoading }) {
  const { isOpen, toggle } = useAccordion();

  return (
    <ul className={styles.questionsAccordion}>
      {!isLoading ? (
        questions?.map((question) => (
          <QuestionsAccordionItem
            key={question.id}
            question={question}
            isOpen={isOpen(question.id)}
            onToggle={toggle}
            questionId={question.id}
          />
        ))
      ) : (
        <Skeleton count={LIMIT} className={styles.questionSkeleton} />
      )}
    </ul>
  );
}

export default QuestionsAccordion;
