import styles from './QuestionShortAnswer.module.css';
import useQuestion from '../../helpers/hooks/useQuestion';
import Card from '../ui/Card/Card';
import Title from '../ui/Title/Title';

function QuestionShortAnswer() {
  const { question } = useQuestion();

  return (
    <Card className={styles.card} isShadow={true}>
      <Title type="h2">Краткий ответ</Title>
      <div dangerouslySetInnerHTML={{ __html: question?.shortAnswer }}></div>
    </Card>
  );
}

export default QuestionShortAnswer;
