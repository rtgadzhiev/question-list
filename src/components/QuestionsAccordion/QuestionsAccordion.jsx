import { LIMIT } from '../../constants/constants';
import QuestionsAccordionItem from '../QuestionsAccordionItem/QuestionsAccordionItem';
import Skeleton from '../ui/Skeleton/Skeleton';
import styles from './QuestionsAccordion.module.css';
import useAccordion from '../../helpers/hooks/useAccordion';
import useQuestions from '../../helpers/hooks/useQuestions';

function QuestionsAccordion() {
  const { questions, isLoading, error } = useQuestions();
  const { isOpen, toggle } = useAccordion();

  return (
    <ul className={styles.questionsAccordion}>
      {isLoading && (
        <Skeleton count={LIMIT} className={styles.questionSkeleton} />
      )}
      {!isLoading &&
        !error &&
        questions?.data.map((question) => (
          <QuestionsAccordionItem
            key={question.id}
            question={question}
            isOpen={isOpen(question.id)}
            onToggle={toggle}
            questionId={question.id}
          />
        ))}
      {!questions?.data.length && 'Вопросы не найдены'}
      {!isLoading && error && 'Ошибка сервера'}
    </ul>
  );
}

export default QuestionsAccordion;
