import MetricCard from '../MetricCard/MetricCard';
import styles from './Metrics.module.css';

function Metrics({ rate, complexity }) {
  return (
    <div className={styles.metrics}>
      <MetricCard title="Рейтинг" score={rate} />
      <MetricCard title="Сложность" score={complexity} />
    </div>
  );
}

export default Metrics;
