import Container from '../../components/layout/Container/Container';
import Grid from '../../components/layout/Grid/Grid';
import PreviousPageButton from '../../components/ui/PreviousPageButton/PreviousPageButton';
import { UIProvider } from '../../context/UIContext';

function QuestionPage() {
  return (
    <Container>
      <PreviousPageButton />
      <UIProvider>
        <Grid></Grid>
      </UIProvider>
    </Container>
  );
}

export default QuestionPage;
