import Card from '../ui/Card/Card';
import Pagination from '../Pagination/Pagination';
import QuestionsAccordion from '../QuestionsAccordion/QuestionsAccordion';
import styles from './Questions.module.css';

function Questions() {
  return (
    // TODO: Сделать так, чтобы в h1 появлялась специализация
    <Card>
      <div className={styles.questionsContainer}>
        <h1 className={styles.questionsTitle}>Вопросы</h1>
        <QuestionsAccordion />
        <Pagination />
      </div>
    </Card>
  );
}

export default Questions;
