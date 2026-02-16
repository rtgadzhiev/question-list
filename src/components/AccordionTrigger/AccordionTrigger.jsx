import clsx from 'clsx';
import styles from './AccordionTrigger.module.css';

function AccordionTrigger({ isOpen, onToggle, children }) {
  return (
    <button
      className={clsx(styles.button, {
        [styles.isOpen]: isOpen,
      })}
      onClick={onToggle}
    >
      {children}
    </button>
  );
}

export default AccordionTrigger;
