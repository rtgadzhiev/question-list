import SearchInput from '../ui/SearchInput/SearchInput';
import useQuestions from '../../helpers/hooks/useQuestions';
import useQuestionsFilters from '../../helpers/hooks/useQuestionsFilters';
import { useState } from 'react';

function Search() {
  const { questionsFilters } = useQuestions();
  const { changeQuestionsFilters } = useQuestionsFilters();

  const [value, setValue] = useState('');

  return (
    <SearchInput
      placeholder="Введите запрос…"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Search;
