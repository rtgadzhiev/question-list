import Card from '../ui/Card/Card';
import FiltersButton from '../ui/FiltersButton/FiltersButton';
import Pagination from '../Pagination/Pagination';
import QuestionsAccordion from '../QuestionsAccordion/QuestionsAccordion';
import QuestionsTitle from '../QuestionsTitle/QuestionsTitle';
import styles from './Questions.module.css';

function Questions({ onClick }) {
  return (
    <section>
      <Card className={styles.container} isShadow={true}>
        <header className={styles.header}>
          <QuestionsTitle />
          <FiltersButton onClick={onClick} />
        </header>
        <QuestionsAccordion />
        <Pagination />
      </Card>
    </section>
  );
}

export default Questions;
