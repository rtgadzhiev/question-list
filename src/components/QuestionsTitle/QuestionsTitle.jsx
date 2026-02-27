import { getSpecialization } from '../../api/apiQuestions';
import styles from './QuestionsTitle.module.css';
import useFetch from '../../helpers/hooks/useFetch';
import { useMemo } from 'react';
import useQuestions from '../../helpers/hooks/useQuestions';

function QuestionsTitle() {
  const { questionsFilters } = useQuestions();

  const filters = useMemo(
    () => ({ id: questionsFilters?.specializationId }),
    [questionsFilters?.specializationId],
  );

  const [data] = useFetch(getSpecialization, filters);

  return (
    <h1 className={styles.title}>
      Вопросы{data?.title ? ` ${data?.title}` : ''}
    </h1>
  );
}

export default QuestionsTitle;
