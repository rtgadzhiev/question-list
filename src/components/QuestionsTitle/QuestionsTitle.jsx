import { getSpecialization } from '../../api/apiQuestions';
import styles from './QuestionsTitle.module.css';
import useFetch from '../../helpers/hooks/useFetch';
import { useSearchParams } from 'react-router';

function QuestionsTitle() {
  const [searchParams] = useSearchParams();
  const specializationId = searchParams.get('specializationId');

  const [data] = useFetch(getSpecialization, specializationId);

  return (
    <h1 className={styles.title}>
      Вопросы{data?.title ? ` ${data?.title}` : ''}
    </h1>
  );
}

export default QuestionsTitle;
