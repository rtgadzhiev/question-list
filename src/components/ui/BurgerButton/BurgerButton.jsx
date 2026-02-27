import Button from '../Button/Button';
import clsx from 'clsx';
import styles from './BurgerButton.module.css';

function BurgerButton({ onClick, isOpen }) {
  return (
    <Button
      onClick={onClick}
      className={clsx(styles.burgerButton, { [styles.isOpen]: isOpen })}
      title={'Открыть меню'}
    >
      <span className={clsx(styles.line, { [styles.isOpen]: isOpen })}></span>
      <span className={clsx(styles.line, { [styles.isOpen]: isOpen })}></span>
      <span className={clsx(styles.line, { [styles.isOpen]: isOpen })}></span>
    </Button>
  );
}

export default BurgerButton;
