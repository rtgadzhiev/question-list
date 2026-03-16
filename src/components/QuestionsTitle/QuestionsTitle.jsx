import { getSpecialization } from '../../api/apiQuestions';
import styles from './QuestionsTitle.module.css';
import useFetch from '../../helpers/hooks/useFetch';
import { useSearchParams } from 'react-router';
import Skeleton from '../ui/Skeleton/Skeleton';
import Title from '../ui/Title/Title';

function QuestionsTitle() {
  const [searchParams] = useSearchParams();
  const specializationId = searchParams.get('specializationId');

  const [data, isLoading] = useFetch(getSpecialization, specializationId);

  return (
    <Title className={styles.title}>
      <span>Вопросы</span>
      {isLoading ? (
        <Skeleton className={styles.skeleton} />
      ) : (
        data?.title && ` ${data?.title}`
      )}
    </Title>
  );
}

export default QuestionsTitle;
