import styles from './QuestionPage.module.css';
import Container from '../../components/layout/Container/Container';
import Grid from '../../components/layout/Grid/Grid';
import { UIProvider } from '../../context/UIContext';

function QuestionPage() {
  return (
    <Container>
      <Grid>
        <UIProvider>123</UIProvider>
      </Grid>
    </Container>
  );
}

export default QuestionPage;
