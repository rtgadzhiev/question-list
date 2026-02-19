import Container from '../../layouts/Container/Container';
import { LIMIT } from '../../constants/constants';
import QuestionsCard from '../QuestionsCard/QuestionsCard';
import QuestionsFilters from '../QuestionsFilters/QuestionsFilters';
import { getPublicQuestions } from '../../api/apiQuestions';
import styles from './QuestionsSection.module.css';
import useFetch from '../../helpers/hooks/useFetch';
import useFilters from '../../helpers/hooks/useFilters';
import usePagination from '../../helpers/hooks/usePagination';

function QuestionsSection() {
  const [questionsFilters, changeQuestionsFilters] = useFilters({
    page: 1,
    limit: LIMIT,
    specializationId: 11,
  });
  const [questions, isLoading] = useFetch(getPublicQuestions, questionsFilters);

  const { totalPages, paginationRange } = usePagination(
    questionsFilters?.page,
    questions?.total,
    questionsFilters?.limit,
  );
  const handleNextPage = () => {
    if (questionsFilters.page < totalPages) {
      changeQuestionsFilters('page', questionsFilters.page + 1);
    }
  };
  const handlePreviousPage = () => {
    if (questionsFilters.page > 1) {
      changeQuestionsFilters('page', questionsFilters.page - 1);
    }
  };
  const handlePageClick = (pageNumber) => {
    changeQuestionsFilters('page', pageNumber);
  };

  return (
    <section>
      <Container className={styles.questionsSectionContainer}>
        <QuestionsCard
          isLoading={isLoading}
          questions={questions}
          currentPage={questionsFilters?.page}
          totalPages={totalPages}
          paginationRange={paginationRange}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageClick={handlePageClick}
        />
        <QuestionsFilters
          questionsFilters={questionsFilters}
          changeQuestionsFilters={changeQuestionsFilters}
        />
      </Container>
    </section>
  );
}

export default QuestionsSection;
