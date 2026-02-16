import QuestionsAccordionItem from '../QuestionsAccordionItem/QuestionsAccordionItem';
import styles from './QuestionsAccordion.module.css';
import useAccordion from '../../helpers/hooks/useAccordion';

function QuestionsAccordion({ questions, isLoading }) {
  const { isOpen, toggle } = useAccordion();

  return (
    <ul className={styles.questionsAccordion}>
      {!isLoading
        ? questions?.map((question) => (
            <QuestionsAccordionItem
              key={question.id}
              question={question}
              isOpen={isOpen(question.id)}
              onToggle={toggle}
              questionId={question.id}
            />
          ))
        : 'Loading...'}
    </ul>
  );
}

export default QuestionsAccordion;
