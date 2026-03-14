import CheckboxGroup from '../ui/CheckboxGroup/CheckboxGroup';
import { RATING_OPTIONS } from '../../constants/constants';
import { useSearchParams } from 'react-router';

function Rating() {
  const [searchParams, setSearchParams] = useSearchParams();

  const isChecked = (id) => {
    const newParams = new URLSearchParams(searchParams);
    const rate = newParams.get('rate') || '';
    const currentRate = rate ? rate.split(',') : [];

    return currentRate.some((option) => +option === id);
  };

  const changeRating = (id) => {
    const newParams = new URLSearchParams(searchParams);
    const rate = newParams.get('rate') || '';
    const currentRate = rate ? rate.split(',') : [];

    const newRating = isChecked(id)
      ? currentRate.filter((option) => +option !== id).join(',')
      : [...currentRate, id].join(',');

    if (!newRating.length) {
      newParams.delete('rate');
    } else {
      newParams.set('rate', newRating);
    }

    newParams.delete('page');
    setSearchParams(newParams);
  };

  return (
    <CheckboxGroup
      legend="Рейтинг"
      options={RATING_OPTIONS?.data}
      onChange={changeRating}
      isChecked={isChecked}
    />
  );
}

export default Rating;
