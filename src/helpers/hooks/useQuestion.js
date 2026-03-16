import { QuestionContext } from '../../context/QuestionContext';
import { useContext } from 'react';

export default function useQuestion() {
  const questionContext = useContext(QuestionContext);

  if (!questionContext)
    throw new Error(
      'useQuestion must be used within a QuestionContextProvider',
    );

  return questionContext;
}
