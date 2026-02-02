import arrow from '../../assets/images/icons/accordeon-arrow-l.svg';
import clsx from 'clsx';
import styles from './Accordeon.module.css';
import { useState } from 'react';

function Accordeon({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordeon}>
      <button
        className={styles.accordeonButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={styles.accordeonTitle}>{title}</span>
        <img
          className={clsx(styles.accordeonArrow, { [styles.isOpen]: isOpen })}
          src={arrow}
          alt=""
          width="24"
          height="24"
        />
      </button>
      <div
        className={clsx(styles.accordeonContent, { [styles.isOpen]: isOpen })}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordeon;
