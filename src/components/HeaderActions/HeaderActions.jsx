import BurgerButton from '../ui/BurgerButton/BurgerButton';
import Button from '../ui/Button/Button';
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
          <Button>Регистрация</Button>
        </div>
      </div>
      <BurgerButton onClick={toggleMenu} isOpen={isOpen} />
    </>
  );
}

export default HeaderActions;
