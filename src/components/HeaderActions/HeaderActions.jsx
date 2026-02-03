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
        <Link title="Вход" />
        <Button title="Регистрация" />
      </div>
      <BurgerButton onClick={toggleMenu} isOpen={isOpen} />
    </>
  );
}

export default HeaderActions;
