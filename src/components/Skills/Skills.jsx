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
    let newQuestionFilters = questionsFilters?.skills;

    if (isChecked(skillId)) {
      newQuestionFilters = newQuestionFilters.filter((id) => id !== skillId);
      changeQuestionsFilters('skills', newQuestionFilters);
    } else {
      newQuestionFilters.push(skillId);
      changeQuestionsFilters('skills', newQuestionFilters);
    }

    changeQuestionsFilters('page', 1);
  };

  const isChecked = (skillId) => {
    return questionsFilters?.skills.some((skill) => skill === skillId);
  };

  const toggleAllSkills = () => {
    if (limit === 8) {
      setLimit(16);
      setIsOpen(true);
    } else {
      setLimit(8);
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
      onClick={toggleAllSkills}
      isOpen={isOpen}
    />
  );
}

export default Skills;
