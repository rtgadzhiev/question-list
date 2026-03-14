import styles from './QuestionsError.module.css';

function QuestionsError({ error }) {
  return (
    <span className={styles.error}>
      {error.name}: {error.message}
    </span>
  );
}

export default QuestionsError;
