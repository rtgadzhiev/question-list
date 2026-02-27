import Container from '../layout/Container/Container';
import Questions from '../Questions/Questions';
import QuestionsFilters from '../QuestionsFilters/QuestionsFilters';
import { QuestionsProvider } from '../../context/QuestionsContext';
import { UIProvider } from '../../context/UIContext';
import styles from './QuestionsSection.module.css';

function QuestionsSection() {
  return (
    <Container className={styles.container}>
      <QuestionsProvider>
        <UIProvider>
          <Questions />
          <QuestionsFilters />
        </UIProvider>
      </QuestionsProvider>
    </Container>
  );
}

export default QuestionsSection;
