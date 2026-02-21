import Card from '../Card/Card';
import Skills from '../Skills/Skills';
import Specializations from '../Specializations/Specializations';
import styles from './QuestionsFilters.module.css';
import useQuestions from '../../helpers/hooks/useQuestions';
import useQuestionsFilters from '../../helpers/hooks/useQuestionsFilters';

function QuestionsFilters() {
  const { questionsFilters } = useQuestions();
  const { changeQuestionsFilters } = useQuestionsFilters();

  return (
    <Card className={styles.filters}>
      <form className={styles.form}>
        <Specializations
          questionsFilters={questionsFilters}
          changeQuestionsFilters={changeQuestionsFilters}
        />
        <Skills
          questionsFilters={questionsFilters}
          changeQuestionsFilters={changeQuestionsFilters}
        />
      </form>
    </Card>
  );
}

export default QuestionsFilters;
