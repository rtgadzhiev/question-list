import styles from './QuestionPage.module.css';
import Container from '../../components/layout/Container/Container';
import Grid from '../../components/layout/Grid/Grid';
import QuestionSection from '../../components/QuestionSection/QuestionSection';
import { UIProvider } from '../../context/UIContext';
import PreviousPageButton from '../../components/ui/PreviousPageButton/PreviousPageButton';
import QuestionInfo from '../../components/QuestionInfo/QuestionInfo';
import { QuestionProvider } from '../../context/QuestionContext';

function QuestionPage() {
  return (
    <Container className={styles.container}>
      <PreviousPageButton />
      <UIProvider>
        <Grid className={styles.grid}>
          <QuestionProvider>
            <QuestionSection />
            <QuestionInfo />
          </QuestionProvider>
        </Grid>
      </UIProvider>
    </Container>
  );
}

export default QuestionPage;
