import CheckboxGroup from '../ui/CheckboxGroup/CheckboxGroup';
import { getSpecializations } from '../../api/apiQuestions';
import useFetch from '../../helpers/hooks/useFetch';
import { useSearchParams } from 'react-router';
import useToggle from '../../helpers/hooks/useToggle';

function Specializations() {
  const [isOpen, toggleAllSpecializations] = useToggle(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const specializationId = +searchParams.get('specializationId');

  const [options, isLoading] = useFetch(getSpecializations);

  const changeSpecialization = (id) => {
    const newParams = new URLSearchParams(searchParams);

    if (specializationId === id) {
      newParams.delete('specializationId');
    } else {
      newParams.delete('specializationId');
      newParams.append('specializationId', id);
    }

    newParams.delete('skills');
    newParams.delete('page');

    setSearchParams(newParams);
  };

  const isChecked = (id) => {
    return specializationId === id;
  };

  return (
    <CheckboxGroup
      legend="Специализация"
      options={isOpen ? options?.data : options?.data.slice(0, 5)}
      isLoading={isLoading}
      onChange={changeSpecialization}
      isChecked={isChecked}
      isShowAllButton={true}
      onClick={toggleAllSpecializations}
      isOpen={isOpen}
    />
  );
}

export default Specializations;
