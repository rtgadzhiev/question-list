import clsx from 'clsx';
import styles from './SearchInput.module.css';

function SearchInput({ className, placeholder, value, onChange }) {
  return (
    <div className={styles.icon}>
      <input
        className={clsx(styles.input, className)}
        type="text"
        name="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchInput;
