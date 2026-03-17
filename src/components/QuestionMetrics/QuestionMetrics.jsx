import useQuestion from '../../helpers/hooks/useQuestion';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import Metrics from '../ui/Metrics/Metrics';
import styles from './QuestionMetrics.module.css';

function QuestionMetrics() {
  const { question } = useQuestion();

  return (
    <InfoGroup title="Уровень:">
      <Metrics
        className={styles.metrics}
        rate={question?.rate}
        complexity={question?.complexity}
      />
    </InfoGroup>
  );
}

export default QuestionMetrics;
