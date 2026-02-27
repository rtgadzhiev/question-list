import clsx from 'clsx';
import styles from './BurgerButton.module.css';

function BurgerButton({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.burgerButton, { [styles.isOpen]: isOpen })}
    >
      <span className={clsx(styles.line, { [styles.isOpen]: isOpen })}></span>
      <span className={clsx(styles.line, { [styles.isOpen]: isOpen })}></span>
      <span className={clsx(styles.line, { [styles.isOpen]: isOpen })}></span>
    </button>
  );
}

export default BurgerButton;
