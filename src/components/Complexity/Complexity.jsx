import { COMPLEXITY_OPTIONS } from '../../constants/constants';
import CheckboxGroup from '../ui/CheckboxGroup/CheckboxGroup';
import useQuestions from '../../helpers/hooks/useQuestions';
import useQuestionsFilters from '../../helpers/hooks/useQuestionsFilters';

function Complexity() {
  const { questionsFilters } = useQuestions();
  const { changeQuestionsFilters } = useQuestionsFilters();

  const changeComplexity = (complexityId) => {
    const currentComplexity = questionsFilters?.complexity;
    const complexityOption = COMPLEXITY_OPTIONS?.data.find(
      (option) => option.id === complexityId,
    );

    const newComplexity = isChecked(complexityId)
      ? currentComplexity.filter(
          (option) => !complexityOption.value.includes(option),
        )
      : [...currentComplexity, ...complexityOption.value];

    changeQuestionsFilters('complexity', newComplexity);
    changeQuestionsFilters('page', 1);
  };

  const isChecked = (complexityId) => {
    const complexityOption = COMPLEXITY_OPTIONS?.data.find(
      (option) => option.id === complexityId,
    );

    return questionsFilters?.complexity.some(
      (option) => option === complexityOption.value[0],
    );
  };

  return (
    <CheckboxGroup
      legend="Уровень сложности"
      options={COMPLEXITY_OPTIONS}
      onChange={changeComplexity}
      isChecked={isChecked}
    />
  );
}

export default Complexity;
