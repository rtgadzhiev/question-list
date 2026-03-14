import { useSearchParams } from 'react-router';
import { COMPLEXITY_OPTIONS } from '../../constants/constants';
import CheckboxGroup from '../ui/CheckboxGroup/CheckboxGroup';

function Complexity() {
  const [searchParams, setSearchParams] = useSearchParams();

  const isChecked = (id) => {
    const complexityOption = COMPLEXITY_OPTIONS?.data.find(
      (option) => option.id === id,
    );
    const newParams = new URLSearchParams(searchParams);
    const complexity = newParams.get('complexity') || '';
    const currentComplexity = complexity ? complexity.split(',') : [];

    return currentComplexity.some(
      (option) => +option === complexityOption.value[0],
    );
  };

  const changeComplexity = (complexityId) => {
    const newParams = new URLSearchParams(searchParams);
    const complexity = newParams.get('complexity') || '';
    const currentComplexity = complexity ? complexity.split(',') : [];
    const complexityOption = COMPLEXITY_OPTIONS?.data.find(
      (option) => option.id === complexityId,
    );

    const newComplexity = isChecked(complexityId)
      ? currentComplexity
          .filter((option) => !complexityOption.value.includes(+option))
          .join(',')
      : [...currentComplexity, ...complexityOption.value].join(',');

    if (!newComplexity.length) {
      newParams.delete('complexity');
    } else {
      newParams.set('complexity', newComplexity);
    }

    newParams.delete('page');
    setSearchParams(newParams);
  };

  return (
    <CheckboxGroup
      legend="Уровень сложности"
      options={COMPLEXITY_OPTIONS?.data}
      onChange={changeComplexity}
      isChecked={isChecked}
    />
  );
}

export default Complexity;
