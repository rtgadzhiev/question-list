import { useEffect, useState } from 'react';

import SearchInput from '../ui/SearchInput/SearchInput';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import useQuestions from '../../helpers/hooks/useQuestions';
import useQuestionsFilters from '../../helpers/hooks/useQuestionsFilters';

function Search() {
  const { questionsFilters } = useQuestions();
  const { changeQuestionsFilters } = useQuestionsFilters();

  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 1000);

  useEffect(() => {
    if (debouncedValue !== questionsFilters?.titleOrDescription) {
      changeQuestionsFilters('titleOrDescription', debouncedValue);
    }
  }, [debouncedValue]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <SearchInput
      placeholder="Введите запрос…"
      value={value}
      onChange={onChange}
    />
  );
}

export default Search;
