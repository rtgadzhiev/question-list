import Link from '../ui/Link/Link';
import { MENU_ITEMS } from '../../constants/constants';
import styles from './Menu.module.css';

function Menu({ className }) {
  return (
    <nav className={className}>
      <ul className={styles.menuList}>
        {MENU_ITEMS.map((item) => (
          <li key={item.id}>
            <Link isActive={item.isActive}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
