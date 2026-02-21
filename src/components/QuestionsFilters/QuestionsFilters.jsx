import Card from '../ui/Card/Card';
import Skills from '../Skills/Skills';
import Specializations from '../Specializations/Specializations';
import styles from './QuestionsFilters.module.css';

function QuestionsFilters() {
  return (
    <Card className={styles.filters}>
      <form className={styles.form}>
        <Specializations />
        <Skills />
      </form>
    </Card>
  );
}

export default QuestionsFilters;
