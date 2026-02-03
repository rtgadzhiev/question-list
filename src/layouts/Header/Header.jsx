import Container from '../Container/Container';
import HeaderActions from '../../components/HeaderActions/HeaderActions';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContent}>
        <HeaderNavigation />
        <HeaderActions />
      </Container>
    </header>
  );
}

export default Header;
