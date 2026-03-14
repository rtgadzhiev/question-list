import { createContext, useEffect, useMemo } from 'react';
import { getPublicQuestions } from '../api/apiQuestions';
import useFetch from '../helpers/hooks/useFetch';
import { useSearchParams } from 'react-router';

export const QuestionsContext = createContext(null);
export const QuestionsFiltersContext = createContext(null);

export function QuestionsProvider({ children }) {
  // const [questionsFilters, changeQuestionsFilters] = useFilters({
  //   page: 1,
  //   limit: LIMIT,
  //   specializationId: 11,
  //   skills: [],
  //   title: '',
  //   complexity: [],
  //   rate: [],
  // });
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const specializationId = searchParams.get('specializationId');

  const [questions, isLoading, error] = useFetch(
    getPublicQuestions,
    searchParams,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, specializationId]);

  const value = useMemo(
    () => ({ questions, isLoading, error }),
    [questions, isLoading, error],
  );

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  );
}
