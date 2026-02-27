import Card from '../ui/Card/Card';
import CloseButton from '../ui/CloseButton/CloseButton';
import Complexity from '../Complexity/Complexity';
import Rating from '../Rating/Rating';
import Search from '../Search/Search';
import Skills from '../Skills/Skills';
import Specializations from '../Specializations/Specializations';
import clsx from 'clsx';
import styles from './QuestionsFilters.module.css';
import useClickOutside from '../../helpers/hooks/useClickOutside';
import { useUI } from '../../helpers/hooks/useUI';

function QuestionsFilters() {
  const { isFiltersOpen, toggleFilters } = useUI();
  const filtersRef = useClickOutside(toggleFilters);

  return (
    <aside
      ref={filtersRef}
      className={clsx(styles.aside, { [styles.isOpen]: isFiltersOpen })}
    >
      <Card className={styles.filters}>
        <CloseButton onClick={toggleFilters} />
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          <Search />
          <Specializations />
          <Skills />
          <Complexity />
          <Rating />
        </form>
      </Card>
    </aside>
  );
}

export default QuestionsFilters;
