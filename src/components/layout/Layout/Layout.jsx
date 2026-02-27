import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Layout;
