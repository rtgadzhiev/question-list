import BurgerButton from '../BurgerButton/BurgerButton';
import Button from '../Button/Button';
import Link from '../Link/Link';
import clsx from 'clsx';
import styles from './HeaderActions.module.css';
import { useState } from 'react';

function HeaderActions() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div
        className={clsx(styles.loginMenuButtons, { [styles.isOpen]: isOpen })}
      >
        <div className={styles.wrapper}>
          <Link className={styles.link}>Вход</Link>
          <Button>Регистрация</Button>
        </div>
      </div>
      <BurgerButton onClick={toggleMenu} isOpen={isOpen} />
    </>
  );
}

export default HeaderActions;
