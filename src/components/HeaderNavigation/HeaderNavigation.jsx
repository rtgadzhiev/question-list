import HeaderAccordeon from '../HeaderAccordeon/HeaderAccordeon';
import Logo from '../Logo/Logo';
import styles from './HeaderNavigation.module.css';

function HeaderNavigation() {
  return (
    <div className={styles.headerNavigation}>
      <Logo />
      <HeaderAccordeon />
    </div>
  );
}

export default HeaderNavigation;
