import clsx from 'clsx';
import styles from './AccordionBody.module.css';

function AccordionBody({ children, bodyRef, isOpen }) {
  return (
    <div
      className={clsx(styles.collapse, {
        [styles.isOpen]: isOpen,
      })}
      style={
        isOpen ? { height: bodyRef.current.scrollHeight } : { height: '0px' }
      }
    >
      <div ref={bodyRef} className={styles.body}>
        {children}
      </div>
    </div>
  );
}

export default AccordionBody;
