import Card from '../ui/Card/Card';
import Pagination from '../Pagination/Pagination';
import QuestionsAccordion from '../QuestionsAccordion/QuestionsAccordion';
import QuestionsTitle from '../QuestionsTitle/QuestionsTitle';
import styles from './Questions.module.css';

function Questions() {
  return (
    // TODO: Сделать так, чтобы в h1 появлялась специализация
    <Card isShadow={true}>
      <div className={styles.questionsContainer}>
        <QuestionsTitle />
        <QuestionsAccordion />
        <Pagination />
      </div>
    </Card>
  );
}

export default Questions;
