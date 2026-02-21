import CheckboxGroup from '../ui/CheckboxGroup/CheckboxGroup';
import { getSkills } from '../../api/apiQuestions';
import { useEffect } from 'react';
import useOptions from '../../helpers/hooks/useOptions';

function Skills({ questionsFilters, changeQuestionsFilters }) {
  // TODO: Исправить двойной запрос при первой загрузке

  const { options, isLoading, filters, changeFilters, isOpen, setIsOpen } =
    useOptions(getSkills, {
      page: 1,
      limit: 8,
      specializations: questionsFilters?.specializationId,
    });

  useEffect(() => {
    changeFilters('specializations', questionsFilters?.specializationId);
  }, [questionsFilters?.specializationId]);

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

  const toggleAllSkills = () => {
    if (filters.limit === 8) {
      changeFilters('limit', 16);
      setIsOpen(true);
    } else {
      changeFilters('limit', 8);
      setIsOpen(false);
    }
  };

  const isChecked = (skillId) => {
    return questionsFilters?.skills.some((skill) => skill === skillId);
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
