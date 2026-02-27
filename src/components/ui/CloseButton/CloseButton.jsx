import Button from '../Button/Button';
import icon from '../../../assets/images/icons/close-button-icon.svg';
import styles from './CloseButton.module.css';

function CloseButton({ onClick }) {
  return (
    <Button className={styles.button} onClick={onClick}>
      <img className={styles.icon} src={icon} alt="" width="18" height="18" />
    </Button>
  );
}

export default CloseButton;
