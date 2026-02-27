import Arrow from '../ui/Arrow/Arrow';
import Dropdown from '../ui/Dropdown/Dropdown';
import Menu from '../Menu/Menu';
import arrow from '../../assets/images/icons/dropdown-arrow-icon.svg';
import styles from './HeaderDropdown.module.css';
import useDropdown from '../../helpers/hooks/useDropdown';
import useDropdownPosition from '../../helpers/hooks/useDropdownPosition';

function HeaderDropdown() {
  const [isOpen, toggleDropdown, dropdownRef] = useDropdown(false);
  const dropdownPosition = useDropdownPosition(dropdownRef);

  return (
    <Dropdown
      ref={dropdownRef}
      isOpen={isOpen}
      onToggle={toggleDropdown}
      trigger={
        <>
          <span>Подготовка</span>
          <Arrow
            className={styles.headerDropdownArrow}
            arrow={arrow}
            isOpen={isOpen}
          />
        </>
      }
      content={<Menu />}
      isMobile={true}
      position={dropdownPosition}
    />
  );
}

export default HeaderDropdown;
