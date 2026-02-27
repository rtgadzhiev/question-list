import CheckboxGroup from '../ui/CheckboxGroup/CheckboxGroup';
import { RATING_OPTIONS } from '../../constants/constants';
import useQuestions from '../../helpers/hooks/useQuestions';
import useQuestionsFilters from '../../helpers/hooks/useQuestionsFilters';

function Rating() {
  const { questionsFilters } = useQuestions();
  const { changeQuestionsFilters } = useQuestionsFilters();

  const changeRating = (ratingId) => {
    const currentRating = questionsFilters?.rate;

    const newRating = isChecked(ratingId)
      ? currentRating.filter((option) => option !== ratingId)
      : [...currentRating, ratingId];

    changeQuestionsFilters('rate', newRating);
  };

  const isChecked = (ratingId) =>
    questionsFilters?.rate.some((option) => option === ratingId);

  return (
    <CheckboxGroup
      legend="Рейтинг"
      options={RATING_OPTIONS}
      onChange={changeRating}
      isChecked={isChecked}
    />
  );
}

export default Rating;
