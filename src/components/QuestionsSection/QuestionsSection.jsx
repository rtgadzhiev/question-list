import Container from '../layout/Container/Container';
import Questions from '../Questions/Questions';
import QuestionsFilters from '../QuestionsFilters/QuestionsFilters';
import { QuestionsProvider } from '../../context/QuestionsContext';
import styles from './QuestionsSection.module.css';

function QuestionsSection() {
  return (
    <section>
      <Container className={styles.questionsSectionContainer}>
        <QuestionsProvider>
          <Questions />
          <QuestionsFilters />
        </QuestionsProvider>
      </Container>
    </section>
  );
}

export default QuestionsSection;
