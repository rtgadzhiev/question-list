import BurgerButton from '../ui/BurgerButton/BurgerButton';
import Button from '../ui/Button/Button';
import ButtonPrimary from '../ui/ButtonPrimary/ButtonPrimary';
import Link from '../ui/Link/Link';
import clsx from 'clsx';
import styles from './HeaderActions.module.css';
import { useState } from 'react';

function HeaderActions() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className={clsx(styles.buttons, { [styles.isOpen]: isOpen })}>
        <div className={styles.wrapper}>
          <Link className={styles.link}>Вход</Link>
          <ButtonPrimary>Регистрация</ButtonPrimary>
        </div>
      </div>
      <BurgerButton onClick={toggleMenu} isOpen={isOpen} />
    </>
  );
}

export default HeaderActions;
