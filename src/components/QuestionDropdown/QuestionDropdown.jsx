import Dropdown from '../Dropdown/Dropdown';
import Link from '../Link/Link';
import icon from '../../assets/images/icons/dropdown-dots-icon.svg';
import styles from './QuestionDropdown.module.css';
import useDropdown from '../../helpers/hooks/useDropdown';
import useDropdownPosition from '../../helpers/hooks/useDropdownPosition';

function QuestionDropdown() {
  const [isOpen, toggleDropdown, dropdownRef] = useDropdown(false);
  const dropdownPosistion = useDropdownPosition(dropdownRef);

  return (
    <Dropdown
      ref={dropdownRef}
      isOpen={isOpen}
      onToggle={toggleDropdown}
      trigger={
        <img className={styles.icon} src={icon} alt="" width="15" height="15" />
      }
      content={<Link title="Подробнее" />}
      position={dropdownPosistion}
    />
  );
}

export default QuestionDropdown;
