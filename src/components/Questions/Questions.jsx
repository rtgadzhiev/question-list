import Accordion from '../Accordion/Accordion';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import styles from './Questions.module.css';

function Questions({ questions }) {
  return (
    <Card>
      <div className={styles.questionsContainer}>
        <h1 className={styles.questionsTitle}>Вопросы</h1>
        <Accordion items={questions} />
        <Pagination />
      </div>
    </Card>
  );
}

export default Questions;

// TODO: Accordeon, QuestionFilters,
