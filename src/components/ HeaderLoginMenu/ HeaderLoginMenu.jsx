import BurgerButton from '../BurgerButton/BurgerButton';
import Button from '../Button/Button';
import Link from '../Link/Link';
import clsx from 'clsx';
import styles from './ HeaderLoginMenu.module.css';
import { useState } from 'react';

function HeaderLoginMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={clsx(styles.loginMenuButtons, { [styles.isOpen]: isOpen })}
      >
        <Link title="Вход" />
        <Button title="Регистрация" />
      </div>
      <BurgerButton
        onClick={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
      />
    </>
  );
}

export default HeaderLoginMenu;
