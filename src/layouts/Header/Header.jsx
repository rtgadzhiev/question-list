import Accordeon from '../../components/Accordeon/Accordeon';
import Container from '../Container/Container';
import HeaderLoginMenu from '../../components/ HeaderLoginMenu/ HeaderLoginMenu';
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContent}>
        <div className={styles.headerNavigation}>
          <Logo className={styles.headerLogo} />
          <Accordeon title="Подготовка">
            <Menu />
          </Accordeon>
        </div>
        <HeaderLoginMenu />
      </Container>
    </header>
  );
}

export default Header;
