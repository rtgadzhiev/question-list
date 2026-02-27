import CheckboxGroup from '../ui/CheckboxGroup/CheckboxGroup';
import { getSkills } from '../../api/apiQuestions';
import useFetch from '../../helpers/hooks/useFetch';
import { useMemo } from 'react';
import useOptions from '../../helpers/hooks/useOptions';
import useQuestions from '../../helpers/hooks/useQuestions';
import useQuestionsFilters from '../../helpers/hooks/useQuestionsFilters';

function Skills() {
  const { questionsFilters } = useQuestions();
  const { changeQuestionsFilters } = useQuestionsFilters();

  const { isOpen, setIsOpen, limit, setLimit } = useOptions(8);
  const filters = useMemo(
    () => ({
      page: 1,
      limit,
      specializations: questionsFilters?.specializationId,
    }),
    [limit, questionsFilters?.specializationId],
  );
  const [options, isLoading] = useFetch(getSkills, filters);

  const changeSkills = (skillId) => {
    const currentSkills = questionsFilters?.skills;

    const newSkills = isChecked(skillId)
      ? currentSkills.filter((id) => id !== skillId)
      : [...currentSkills, skillId];

    changeQuestionsFilters('skills', newSkills);
  };

  const isChecked = (skillId) => {
    return questionsFilters?.skills.some((skill) => skill === skillId);
  };

  const toggleAllSkills = (minValue = 8, maxValue = 16) => {
    if (limit === minValue) {
      setLimit(maxValue);
      setIsOpen(true);
    } else {
      setLimit(minValue);
      setIsOpen(false);
    }
  };

  return (
    <CheckboxGroup
      legend="Навыки"
      options={options}
      isLoading={isLoading}
      onChange={changeSkills}
      isChecked={isChecked}
      isShowAllButton={true}
      onClick={() => toggleAllSkills()}
      isOpen={isOpen}
    />
  );
}

export default Skills;
