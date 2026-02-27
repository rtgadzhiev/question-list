import Button from '../ui/Button/Button';
import clsx from 'clsx';
import styles from './AccordionTrigger.module.css';

function AccordionTrigger({ isOpen, onToggle, children }) {
  return (
    <Button
      className={clsx(styles.button, {
        [styles.isOpen]: isOpen,
      })}
      onClick={onToggle}
    >
      {children}
    </Button>
  );
}

export default AccordionTrigger;
