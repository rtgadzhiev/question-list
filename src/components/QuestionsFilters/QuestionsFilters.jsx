import Card from '../ui/Card/Card';
import Complexity from '../Complexity/Complexity';
import Rating from '../Rating/Rating';
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
        <Complexity />
        <Rating />
      </form>
    </Card>
  );
}

export default QuestionsFilters;
