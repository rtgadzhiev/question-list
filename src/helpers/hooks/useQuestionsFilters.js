import { QuestionsFiltersContext } from '../../context/QuestionsContext';
import { useContext } from 'react';

export default function useQuestionsFilters() {
  const questionsFiltersContext = useContext(QuestionsFiltersContext);

  if (!questionsFiltersContext)
    throw new Error(
      'useQuestionsFilters must be used within a QuestionsFiltersContextProvider',
    );

  return questionsFiltersContext;
}
