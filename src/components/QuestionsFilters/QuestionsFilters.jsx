import Card from '../ui/Card/Card';
import CloseButton from '../ui/CloseButton/CloseButton';
import Complexity from '../Complexity/Complexity';
import Rating from '../Rating/Rating';
import Search from '../Search/Search';
import Skills from '../Skills/Skills';
import Specializations from '../Specializations/Specializations';
import clsx from 'clsx';
import styles from './QuestionsFilters.module.css';
import { useUI } from '../../helpers/hooks/useUI';
import Aside from '../ui/Aside/Aside';

function QuestionsFilters() {
  const { isOpen, toggle, ref } = useUI();

  return (
    <Aside ref={ref} isOpen={isOpen}>
      <CloseButton onClick={toggle} />
      <form className={styles.form}>
        <Search />
        <Specializations />
        <Skills />
        <Complexity />
        <Rating />
      </form>
    </Aside>
  );
}

export default QuestionsFilters;
