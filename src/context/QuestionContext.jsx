import { createContext, useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router';
import { getPublicQuestion } from '../api/apiQuestions';
import useFetch from '../helpers/hooks/useFetch';

export const QuestionContext = createContext(null);

export function QuestionProvider({ children }) {
  const { id } = useParams();

  const [question, isLoading, error] = useFetch(getPublicQuestion, id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const value = useMemo(
    () => ({ question, isLoading, error }),
    [question, isLoading, error],
  );

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
}
