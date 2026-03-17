import Container from '../../components/layout/Container/Container';
import Grid from '../../components/layout/Grid/Grid';
import { UIProvider } from '../../context/UIContext';
import QuestionsSection from '../../components/QuestionsSection/QuestionsSection';
import QuestionsFilters from '../../components/QuestionsFilters/QuestionsFilters';

function QuestionsPage() {
  return (
    <Container>
      <Grid>
        <UIProvider>
          <QuestionsSection />
          <QuestionsFilters />
        </UIProvider>
      </Grid>
    </Container>
  );
}

export default QuestionsPage;
