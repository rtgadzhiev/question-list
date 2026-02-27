import icon from '../../../assets/images/icons/close-button-icon.svg';
import styles from './CloseButton.module.css';

function CloseButton() {
  return (
    <button className={styles.button}>
      <img className={styles.icon} src={icon} alt="" width="18" height="18" />
    </button>
  );
}

export default CloseButton;
