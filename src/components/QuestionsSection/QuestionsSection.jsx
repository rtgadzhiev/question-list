import { useEffect, useState } from 'react';

import Container from '../../layouts/Container/Container';
import QuestionsCard from '../QuestionsCard/QuestionsCard';
import QuestionsFilters from '../QuestionsFilters/QuestionsFilters';
import mockData from '../../api/mock.json';
import styles from './QuestionsSection.module.css';

function QuestionsSection() {
  const [questions, setQuestions] = useState(mockData.data);
  const [filters, setFilters] = useState({});

  return (
    <section>
      <Container className={styles.questionsSectionContainer}>
        <QuestionsCard questions={questions} />
        {/* <QuestionsFiltersCard /> */}
      </Container>
    </section>
  );
}

export default QuestionsSection;
