import styles from './AccordeonBase.module.css';

function AccordeonBase({ header, isOpen, onClick, children }) {
  return (
    <div className={styles.accordeonBase}>
      {header({ isOpen, onClick })}
      {children}
    </div>
  );
}

export default AccordeonBase;
