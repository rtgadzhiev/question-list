import { useEffect, useState } from 'react';
import SearchInput from '../ui/SearchInput/SearchInput';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useSearchParams } from 'react-router';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title') || '';
  const [value, setValue] = useState(title);
  const debouncedValue = useDebounce(value, 1000);

  useEffect(() => {
    if (debouncedValue !== title) {
      const newParams = new URLSearchParams(searchParams);

      if (debouncedValue === '') {
        newParams.delete('title');
      } else {
        newParams.set('title', debouncedValue);
      }

      newParams.delete('page');
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

        newParams.delete('page');
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
