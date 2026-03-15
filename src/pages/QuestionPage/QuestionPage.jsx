import styles from './QuestionPage.module.css';
import Container from '../../components/layout/Container/Container';
import Grid from '../../components/layout/Grid/Grid';
import QuestionSection from '../../components/QuestionSection/QuestionSection';
import PreviousPageButton from '../../components/ui/PreviousPageButton/PreviousPageButton';
import { UIProvider } from '../../context/UIContext';

function QuestionPage() {
  return (
    <Container className={styles.container}>
      <PreviousPageButton />
      <UIProvider>
        <Grid>
          <QuestionSection />
        </Grid>
      </UIProvider>
    </Container>
  );
}

export default QuestionPage;
