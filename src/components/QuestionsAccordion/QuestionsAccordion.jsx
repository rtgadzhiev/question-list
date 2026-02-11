import QuestionsAccordionItem from '../QuestionsAccordionItem/QuestionsAccordionItem';
import styles from './QuestionsAccordion.module.css';
import useAccordion from '../../helpers/hooks/useAccordion';

function QuestionsAccordion({ questions }) {
  const { isOpen, toggle } = useAccordion();

  return (
    <ul className={styles.questionsAccordion}>
      {questions.map((question) => (
        <QuestionsAccordionItem
          key={question.id}
          question={question}
          isOpen={isOpen(question.id)}
          onToggle={toggle}
          questionId={question.id}
        />
      ))}
    </ul>
  );
}

export default QuestionsAccordion;
