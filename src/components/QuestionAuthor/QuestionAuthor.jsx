import useQuestion from '../../helpers/hooks/useQuestion';
import Author from '../ui/Author/Author';
import styles from './QuestionAuthor.module.css';

function QuestionAuthor() {
  const { question } = useQuestion();

  return (
    <span className={styles.author}>
      Автор:
      <Author name={question?.createdBy?.username} />
    </span>
  );
}

export default QuestionAuthor;
