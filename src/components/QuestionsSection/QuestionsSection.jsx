import Container from '../layout/Container/Container';
import Questions from '../Questions/Questions';
import QuestionsFilters from '../QuestionsFilters/QuestionsFilters';
import { UIProvider } from '../../context/UIContext';
import styles from './QuestionsSection.module.css';

function QuestionsSection() {
  return (
    <Container className={styles.container}>
      <UIProvider>
        <Questions />
        <QuestionsFilters />
      </UIProvider>
    </Container>
  );
}

export default QuestionsSection;
