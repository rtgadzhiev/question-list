import styles from './MainContent.module.css';

function MainContent({ children }) {
  return <main className={styles.mainContent}>{children}</main>;
}

export default MainContent;
