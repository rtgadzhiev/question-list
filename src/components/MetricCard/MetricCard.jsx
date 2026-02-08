import styles from './MetricCard.module.css';

function MetricCard({ title, score }) {
  return (
    <div className={styles.metricCard}>
      <span className={styles.metricCardTitle}>{`${title}:`}</span>
      <div className={styles.metricCardScore}>{score}</div>
    </div>
  );
}

export default MetricCard;
