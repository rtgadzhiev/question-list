import AccordeonArrow from '../AccordeonArrow/AccordeonArrow';
import AccordeonBase from '../AccordeonBase/AccordeonBase';
import Menu from '../Menu/Menu';
import arrow from '../../assets/images/icons/accordeon-arrow-l.svg';
import clsx from 'clsx';
import styles from './HeaderAccordeon.module.css';
import { useState } from 'react';

function HeaderAccordeon() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordeon = () => setIsOpen((prev) => !prev);

  return (
    <AccordeonBase
      onClick={toggleAccordeon}
      isOpen={isOpen}
      header={({ isOpen, onClick }) => (
        <>
          <button
            className={clsx('visibleTablet', styles.headerAccordeonButton)}
            onClick={onClick}
          >
            <span>Подготовка</span>
            <AccordeonArrow
              className={styles.headerAccordeonArrow}
              arrow={arrow}
              isOpen={isOpen}
            />
          </button>
        </>
      )}
    >
      <div
        className={clsx(styles.headerAccordeonContent, {
          [styles.isOpen]: isOpen,
        })}
      >
        <Menu className={styles.headerAccordeonMenu} />
      </div>
    </AccordeonBase>
  );
}

export default HeaderAccordeon;
