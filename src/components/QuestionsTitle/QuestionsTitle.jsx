import { getSpecialization } from '../../api/apiQuestions';
import styles from './QuestionsTitle.module.css';
import useFetch from '../../helpers/hooks/useFetch';
import { useSearchParams } from 'react-router';
import Skeleton from '../ui/Skeleton/Skeleton';

function QuestionsTitle() {
  const [searchParams] = useSearchParams();
  const specializationId = searchParams.get('specializationId');

  const [data, isLoading] = useFetch(getSpecialization, specializationId);

  return (
    <h1 className={styles.title}>
      Вопросы
      {isLoading ? (
        <Skeleton className={styles.skeleton} />
      ) : (
        data?.title && ` ${data?.title}`
      )}
    </h1>
  );
}

export default QuestionsTitle;
