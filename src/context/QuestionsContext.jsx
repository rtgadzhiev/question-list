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
  });
  const [questions, isLoading] = useFetch(getPublicQuestions, questionsFilters);

  const value = useMemo(
    () => ({ questions, questionsFilters, isLoading }),
    [questions, questionsFilters, isLoading],
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
