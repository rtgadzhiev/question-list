import CheckboxGroup from '../ui/CheckboxGroup/CheckboxGroup';
import { getSkills } from '../../api/apiQuestions';
import useFetch from '../../helpers/hooks/useFetch';
import { useSearchParams } from 'react-router';
import useToggle from '../../helpers/hooks/useToggle';

function Skills() {
  const [isOpen, toggleAllSkills] = useToggle(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const specializationId = searchParams.get('specializationId');
  const [options, isLoading, setIsLoading] = useFetch(
    getSkills,
    specializationId,
  );

  const isChecked = (skillId) => {
    const newParams = new URLSearchParams(searchParams);
    const skills = newParams.get('skills') || '';
    const currentSkills = skills ? skills.split(',') : [];

    return currentSkills.some((skill) => +skill === skillId);
  };

  const changeSkills = (skillId) => {
    const newParams = new URLSearchParams(searchParams);
    const skills = newParams.get('skills') || '';
    const currentSkills = skills ? skills.split(',') : [];

    const newSkills = isChecked(skillId)
      ? currentSkills.filter((id) => +id !== skillId).join(',')
      : [...currentSkills, skillId].join(',');

    if (!newSkills.length) {
      newParams.delete('skills');
    } else {
      newParams.set('skills', newSkills);
    }

    newParams.delete('page');

    setSearchParams(newParams);
  };

  return (
    <CheckboxGroup
      legend="Навыки"
      options={isOpen ? options?.data : options?.data.slice(0, 5)}
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
