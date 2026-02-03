import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
}

export default Layout;
