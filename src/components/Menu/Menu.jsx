import Link from '../Link/Link';
import styles from './Menu.module.css';

const menuItems = [
  { id: 1, title: 'База вопросов', isActive: true },
  { id: 2, title: 'Тренажер' },
  { id: 3, title: 'Материалы' },
  { id: 4, title: 'Навыки (hh)' },
];

function Menu({ className }) {
  return (
    <nav className={className}>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link title={item.title} isActive={item.isActive} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
