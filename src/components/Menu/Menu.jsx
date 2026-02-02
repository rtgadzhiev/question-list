import Link from '../Link/Link';
import styles from './Menu.module.css';

const menuItems = [
  { id: 1, title: 'База вопросов' },
  { id: 2, title: 'Тренажёр' },
  { id: 3, title: 'Материалы' },
  { id: 4, title: 'Навыки (hh)' },
];

function Menu() {
  return (
    <nav>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link title={item.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
