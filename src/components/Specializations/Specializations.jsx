import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import { getSpecializations } from '../../api/apiQuestions';
import useFetch from '../../helpers/hooks/useFetch';
import useFilters from '../../helpers/hooks/useFilters';
import { useState } from 'react';

function Specializations({ questionsFilters, changeQuestionsFilters }) {
  // TODO: Вынести в отдельный хук useOptions
  const [isOpen, setIsOpen] = useState(false);

  const [filters, changeFilters] = useFilters({
    page: 1,
    limit: 5,
  });

  const [specializations, isLoading] = useFetch(getSpecializations, filters);

  const changeSpecialization = (specializationId) => {
    if (questionsFilters?.specializationId === specializationId) {
      changeQuestionsFilters('specializationId', null);
    } else {
      changeQuestionsFilters('specializationId', specializationId);
    }

    changeQuestionsFilters('page', 1);
  };

  const toggleAllSpecializations = () => {
    if (filters.limit === 5) {
      changeFilters('limit', 26);
      setIsOpen(true);
    } else {
      changeFilters('limit', 5);
      setIsOpen(false);
    }
  };

  return (
    <>
      <CheckboxGroup
        legend="Специализация"
        options={specializations}
        isLoading={isLoading}
        onChange={changeSpecialization}
        filter={questionsFilters?.specializationId}
        isShowAllButton={true}
        onClick={toggleAllSpecializations}
        isOpen={isOpen}
      />
    </>
  );
}

export default Specializations;
