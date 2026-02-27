import Container from '../layout/Container/Container';
import Questions from '../Questions/Questions';
import QuestionsFilters from '../QuestionsFilters/QuestionsFilters';
import { QuestionsProvider } from '../../context/QuestionsContext';
import styles from './QuestionsSection.module.css';

function QuestionsSection() {
  return (
    <Container className={styles.questionsSectionContainer}>
      <QuestionsProvider>
        <Questions />
        <QuestionsFilters isOpen={true} />
      </QuestionsProvider>
    </Container>
  );
}

export default QuestionsSection;
