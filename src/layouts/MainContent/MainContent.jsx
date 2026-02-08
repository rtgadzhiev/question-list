import QuestionsSection from '../../components/QuestionsSection/QuestionsSection';
import styles from './MainContent.module.css';

function MainContent() {
  return (
    <main className={styles.mainContent}>
      <QuestionsSection />
    </main>
  );
}

export default MainContent;
