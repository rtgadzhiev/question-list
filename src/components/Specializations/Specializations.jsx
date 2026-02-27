import { useMemo, useState } from 'react';

import CheckboxGroup from '../ui/CheckboxGroup/CheckboxGroup';
import { getSpecializations } from '../../api/apiQuestions';
import useFetch from '../../helpers/hooks/useFetch';
import useOptions from '../../helpers/hooks/useOptions';
import useQuestions from '../../helpers/hooks/useQuestions';
import useQuestionsFilters from '../../helpers/hooks/useQuestionsFilters';

function Specializations() {
  const { questionsFilters } = useQuestions();
  const { changeQuestionsFilters } = useQuestionsFilters();

  const { isOpen, setIsOpen, limit, setLimit } = useOptions(5);

  const filters = useMemo(
    () => ({
      page: 1,
      limit: limit,
    }),
    [limit],
  );

  const [options, isLoading] = useFetch(getSpecializations, filters);

  const changeSpecialization = (specializationId) => {
    if (questionsFilters?.specializationId === specializationId) {
      changeQuestionsFilters('specializationId', null);
    } else {
      changeQuestionsFilters('specializationId', specializationId);
    }

    changeQuestionsFilters('skills', []);
  };

  const toggleAllSpecializations = () => {
    if (limit === 5) {
      setLimit(26);
      setIsOpen(true);
    } else {
      setLimit(5);
      setIsOpen(false);
    }
  };

  const isChecked = (specializationId) => {
    return questionsFilters?.specializationId === specializationId;
  };

  return (
    <CheckboxGroup
      legend="Специализация"
      options={options}
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
