import styles from './QuestionShortAnswer.module.css';
import useQuestion from '../../helpers/hooks/useQuestion';
import Card from '../ui/Card/Card';
import Title from '../ui/Title/Title';

function QuestionShortAnswer() {
  const { question } = useQuestion();

  return (
    <Card className={styles.card} isShadow={true}>
      <Title>Краткий ответ</Title>
      <div dangerouslySetInnerHTML={{ __html: question?.shortAnswer }}></div>
    </Card>
  );
}
// TODO: Title сделать так чтобы принимал разные теги и отображал разные стили для них
export default QuestionShortAnswer;
