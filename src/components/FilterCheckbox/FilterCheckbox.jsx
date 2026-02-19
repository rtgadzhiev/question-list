import clsx from 'clsx';
import styles from './FilterCheckbox.module.css';

function FilterCheckbox({ className, label, id, checked, onChange, imageSrc }) {
  return (
    <div
      className={clsx(styles.checkbox, className, {
        [styles.isChecked]: checked,
      })}
    >
      <label className={styles.label} htmlFor={id}>
        <input
          className={styles.input}
          type="checkbox"
          checked={checked}
          id={id}
          onChange={(e) => onChange(e.target.checked)}
        />
        {imageSrc && <img src={imageSrc} alt="" width="30" height="30" />}
        {label}
      </label>
    </div>
  );
}

export default FilterCheckbox;
