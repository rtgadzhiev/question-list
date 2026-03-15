import Container from '../../components/layout/Container/Container';
import Grid from '../../components/layout/Grid/Grid';
import { UIProvider } from '../../context/UIContext';

function QuestionPage() {
  return (
    <Container>
      <div>link</div>
      <UIProvider>
        <Grid></Grid>
      </UIProvider>
    </Container>
  );
}

export default QuestionPage;
