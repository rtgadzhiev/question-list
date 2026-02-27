import icon from '../../../assets/images/icons/close-button-icon.svg';
import styles from './CloseButton.module.css';

function CloseButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <img className={styles.icon} src={icon} alt="" width="18" height="18" />
    </button>
  );
}

export default CloseButton;
