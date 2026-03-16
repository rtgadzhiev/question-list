import clsx from 'clsx';
import MetricCard from '../MetricCard/MetricCard';
import styles from './Metrics.module.css';

function Metrics({ rate, complexity, className }) {
  return (
    <div className={clsx(styles.metrics, className)}>
      <MetricCard title="Рейтинг" score={rate} />
      <MetricCard title="Сложность" score={complexity} />
    </div>
  );
}

export default Metrics;
