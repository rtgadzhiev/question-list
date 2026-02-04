import Arrow from '../Arrow/Arrow';
import Dropdown from '../Dropdown/Dropdown';
import Menu from '../Menu/Menu';
import arrow from '../../assets/images/icons/dropdown-arrow-icon.svg';
import clsx from 'clsx';
import styles from './HeaderDropdown.module.css';
import { useState } from 'react';

function HeaderDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <Dropdown
      onClick={toggleDropdown}
      isOpen={isOpen}
      header={({ isOpen, onClick }) => (
        <>
          <button
            className={clsx('visibleTablet', styles.headerDropdownButton)}
            onClick={onClick}
          >
            <span>Подготовка</span>
            <Arrow
              className={styles.headerDropdownArrow}
              arrow={arrow}
              isOpen={isOpen}
            />
          </button>
        </>
      )}
    >
      <div
        className={clsx(styles.headerDropdownContent, {
          [styles.isOpen]: isOpen,
        })}
      >
        <Menu className={styles.headerDropdownMenu} />
      </div>
    </Dropdown>
  );
}

export default HeaderDropdown;
