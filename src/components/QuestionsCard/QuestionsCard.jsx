import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import QuestionsAccordion from '../QuestionsAccordion/QuestionsAccordion';
import styles from './QuestionsCard.module.css';

function QuestionsCard({ questions }) {
  return (
    <Card>
      <div className={styles.questionsContainer}>
        <h1 className={styles.questionsTitle}>Вопросы</h1>
        <QuestionsAccordion questions={questions} />
        <Pagination />
      </div>
    </Card>
  );
}

export default QuestionsCard;
