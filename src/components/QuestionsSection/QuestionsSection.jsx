import { useEffect, useState } from 'react';

import Container from '../../layouts/Container/Container';
import Questions from '../Questions/Questions';
import QuestionsFilters from '../QuestionsFilters/QuestionsFilters';
import mockData from '../../api/mock.json';
import styles from './QuestionsSection.module.css';

function QuestionsSection() {
  const [questions, setQuestions] = useState(mockData.data);
  const [filters, setFilters] = useState({});

  console.log(questions);

  return (
    <section>
      <Container className={styles.questionsSectionContainer}>
        <Questions questions={questions} />
        {/* <QuestionsFilters /> */}
      </Container>
    </section>
  );
}

export default QuestionsSection;
