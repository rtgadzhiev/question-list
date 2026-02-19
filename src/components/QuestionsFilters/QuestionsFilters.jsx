import Card from '../Card/Card';
import Specializations from '../Specializations/Specializations';
import styles from './QuestionsFilters.module.css';

function QuestionsFilters({ questionsFilters, changeQuestionsFilters }) {
  return (
    <Card className={styles.filters}>
      <form>
        <Specializations
          questionsFilters={questionsFilters}
          changeQuestionsFilters={changeQuestionsFilters}
        />
      </form>
    </Card>
  );
}

export default QuestionsFilters;
