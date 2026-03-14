import { useEffect, useState } from 'react';

import SearchInput from '../ui/SearchInput/SearchInput';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import useQuestions from '../../helpers/hooks/useQuestions';
import useQuestionsFilters from '../../helpers/hooks/useQuestionsFilters';
import { useSearchParams } from 'react-router';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title') || '';
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 1000);

  useEffect(() => {
    if (debouncedValue !== title) {
      const newParams = new URLSearchParams(searchParams);

      if (debouncedValue === '') {
        newParams.delete('title');
      } else {
        newParams.set('title', debouncedValue);
      }

      newParams.set('page', 1);
      setSearchParams(newParams);
    }
  }, [debouncedValue]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (value !== title) {
        const newParams = new URLSearchParams(searchParams);

        if (value === '') {
          newParams.delete('title');
        } else {
          newParams.set('title', value);
        }

        newParams.set('page', 1);
        setSearchParams(newParams);
      }
    }
  };

  return (
    <SearchInput
      placeholder="Введите запрос…"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default Search;
