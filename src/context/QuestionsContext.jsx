import { createContext, useEffect, useMemo } from 'react';

import { LIMIT } from '../constants/constants';
import { getPublicQuestions } from '../api/apiQuestions';
import useFetch from '../helpers/hooks/useFetch';
import useFilters from '../helpers/hooks/useFilters';

export const QuestionsContext = createContext(null);
export const QuestionsFiltersContext = createContext(null);

export function QuestionsProvider({ children }) {
  const [questionsFilters, changeQuestionsFilters] = useFilters({
    page: 1,
    limit: LIMIT,
    specializationId: 11,
    skills: [],
    titleOrDescription: '',
    complexity: [],
    rate: [],
  });
  const [questions, isLoading, error] = useFetch(
    getPublicQuestions,
    questionsFilters,
  );

  useEffect(() => {
    changeQuestionsFilters('page', 1);
  }, [
    questionsFilters?.specializationId,
    questionsFilters?.skills,
    questionsFilters?.titleOrDescription,
    questionsFilters?.complexity,
    questionsFilters?.rate,
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [questionsFilters?.page, questionsFilters?.specializationId]);

  const value = useMemo(
    () => ({ questions, questionsFilters, isLoading, error }),
    [questions, questionsFilters, isLoading, error],
  );

  const actions = useMemo(
    () => ({ changeQuestionsFilters }),
    [changeQuestionsFilters],
  );

  return (
    <QuestionsContext.Provider value={value}>
      <QuestionsFiltersContext.Provider value={actions}>
        {children}
      </QuestionsFiltersContext.Provider>
    </QuestionsContext.Provider>
  );
}
