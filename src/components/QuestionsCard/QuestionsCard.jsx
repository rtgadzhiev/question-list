import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import QuestionsAccordion from '../QuestionsAccordion/QuestionsAccordion';
import styles from './QuestionsCard.module.css';

function QuestionsCard({
  questions,
  currentPage,
  totalPages,
  paginationRange,
  isLoading,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
}) {
  return (
    // TODO: Сделать так, чтобы в h1 появлялась специализация
    <Card>
      <div className={styles.questionsContainer}>
        <h1 className={styles.questionsTitle}>Вопросы</h1>
        <QuestionsAccordion questions={questions?.data} isLoading={isLoading} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginationRange={paginationRange}
          isLoading={isLoading}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageClick={handlePageClick}
        />
      </div>
    </Card>
  );
}

export default QuestionsCard;
