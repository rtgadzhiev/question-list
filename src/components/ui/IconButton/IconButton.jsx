import clsx from 'clsx';
import Button from '../Button/Button';
import styles from './IconButton.module.css';

function IconButton({ onClick, icon, title, className }) {
  return (
    <Button
      className={clsx(styles.button, className)}
      onClick={onClick}
      title={title}
    >
      <img className={styles.icon} src={icon} alt="" width="24" height="24" />
    </Button>
  );
}

export default IconButton;
