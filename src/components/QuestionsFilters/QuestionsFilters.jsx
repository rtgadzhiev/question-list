import Card from '../ui/Card/Card';
import Search from '../Search/Search';
import Skills from '../Skills/Skills';
import Specializations from '../Specializations/Specializations';
import styles from './QuestionsFilters.module.css';

function QuestionsFilters() {
  return (
    <Card className={styles.filters}>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <Search />
        <Specializations />
        <Skills />
      </form>
    </Card>
  );
}

export default QuestionsFilters;
