import QuestionsSection from '../../QuestionsSection/QuestionsSection';
import styles from './MainContent.module.css';

function MainContent() {
  return (
    <main className={styles.main}>
      <QuestionsSection />
    </main>
  );
}

export default MainContent;
