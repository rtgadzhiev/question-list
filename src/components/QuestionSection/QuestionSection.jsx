import styles from './QuestionSection.module.css';
import QuestionHeader from '../QuestionHeader/QuestionHeader';
import { QuestionProvider } from '../../context/QuestionContext';

function QuestionSection() {
  return (
    <section>
      <QuestionProvider>
        <QuestionHeader />
      </QuestionProvider>
    </section>
  );
}

export default QuestionSection;
