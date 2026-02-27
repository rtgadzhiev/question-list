import styles from './MetricCard.module.css';

function MetricCard({ title, score }) {
  return (
    <div className={styles.metricCard}>
      <span className={styles.title}>{title}:</span>
      <div className={styles.score}>{score}</div>
    </div>
  );
}

export default MetricCard;
