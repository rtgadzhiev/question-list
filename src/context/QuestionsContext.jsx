import { createContext, useMemo } from 'react';

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
    rate: [1],
  });
  const [questions, isLoading, error] = useFetch(
    getPublicQuestions,
    questionsFilters,
  );

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
