import Card from '../ui/Card/Card';
import FiltersButton from '../ui/FiltersButton/FiltersButton';
import QuestionsAccordion from '../QuestionsAccordion/QuestionsAccordion';
import QuestionsPagination from '../QuestionsPagination/QuestionsPagination';
import QuestionsTitle from '../QuestionsTitle/QuestionsTitle';
import styles from './QuestionsSection.module.css';
import { useUI } from '../../helpers/hooks/useUI';
import { QuestionsProvider } from '../../context/QuestionsContext';

function QuestionsSection() {
  const { toggleFilters } = useUI();

  return (
    <section>
      <Card className={styles.questions} isShadow={true}>
        <header className={styles.header}>
          <QuestionsTitle />
          <FiltersButton onClick={toggleFilters} />
        </header>
        <QuestionsProvider>
          <QuestionsAccordion />
          <QuestionsPagination />
        </QuestionsProvider>
      </Card>
    </section>
  );
}

export default QuestionsSection;
