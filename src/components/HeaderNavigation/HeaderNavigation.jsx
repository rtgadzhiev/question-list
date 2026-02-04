import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';
import Logo from '../Logo/Logo';
import styles from './HeaderNavigation.module.css';

function HeaderNavigation() {
  return (
    <div className={styles.headerNavigation}>
      <Logo />
      <HeaderDropdown />
    </div>
  );
}

export default HeaderNavigation;
