import Container from '../../layouts/Container/Container';
import QuestionsCard from '../QuestionsCard/QuestionsCard';
import QuestionsFilters from '../QuestionsFilters/QuestionsFilters';
import { getPublicQuestions } from '../../api/apiQuestions';
import styles from './QuestionsSection.module.css';
import useFetch from '../../helpers/hooks/useFetch';
import useFilters from '../../helpers/hooks/useFilters';
import usePagination from '../../helpers/hooks/usePagination';

function QuestionsSection() {
  const { filters, changeFilters } = useFilters({ page: 1, limit: 10 });
  const { data, isLoading } = useFetch(getPublicQuestions, filters);
  const { totalPages, paginationRange } = usePagination(
    filters?.page,
    data?.total,
    filters?.limit,
  );

  const handleNextPage = () => {
    if (filters.page < totalPages) {
      changeFilters('page', filters.page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page > 1) {
      changeFilters('page', filters.page - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilters('page', pageNumber);
  };

  return (
    <section>
      <Container className={styles.questionsSectionContainer}>
        <QuestionsCard
          isLoading={isLoading}
          questions={data}
          currentPage={filters?.page}
          totalPages={totalPages}
          paginationRange={paginationRange}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageClick={handlePageClick}
        />
        {/* <QuestionsFiltersCard /> */}
      </Container>
    </section>
  );
}

export default QuestionsSection;
