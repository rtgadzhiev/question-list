import styles from './Dropdown.module.css';

function Dropdown({ header, isOpen, onClick, children }) {
  return (
    <div className={styles.dropdown}>
      {header({ isOpen, onClick })}
      {children}
    </div>
  );
}

export default Dropdown;
