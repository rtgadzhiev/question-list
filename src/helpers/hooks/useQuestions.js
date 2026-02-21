import { QuestionsContext } from '../../context/QuestionsContext';
import { useContext } from 'react';

export default function useQuestions() {
  const questionsContext = useContext(QuestionsContext);

  if (!questionsContext)
    throw new Error(
      'useQuestions must be used within a QuestionsContextProvider',
    );

  return questionsContext;
}
