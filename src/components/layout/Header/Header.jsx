import Container from '../Container/Container';
import HeaderActions from '../../HeaderActions/HeaderActions';
import HeaderNavigation from '../../HeaderNavigation/HeaderNavigation';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.сontent}>
        <HeaderNavigation />
        <HeaderActions />
      </Container>
    </header>
  );
}

export default Header;
