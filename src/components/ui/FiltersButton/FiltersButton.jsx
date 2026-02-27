import icon from '../../../assets/images/icons/filters-button-icon.svg';
import styles from './FiltersButton.module.css';

function FiltersButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <img className={styles.icon} src={icon} alt="" width="24" height="24" />
    </button>
  );
}

export default FiltersButton;
