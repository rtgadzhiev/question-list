import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Skeleton from '../Skeleton/Skeleton';
import styles from './CheckboxGroup.module.css';

function CheckboxGroup({
  legend,
  options,
  isLoading = false,
  onChange,
  filter,
  isShowAllButton = false,
  onClick,
  isOpen,
}) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Skeleton className={styles.skeleton} count={5} />
        ) : (
          options?.data.map((option) => (
            <FilterCheckbox
              className={styles.checkbox}
              key={option.id}
              label={option.title}
              id={option.id}
              onChange={() => onChange(option.id)}
              checked={filter === option.id}
            />
          ))
        )}
      </div>
      {isShowAllButton && (
        <button
          className={styles.button}
          type="button"
          onClick={() => onClick()}
        >
          {isOpen ? 'Скрыть' : 'Посмотреть все'}
        </button>
      )}
    </fieldset>
  );
}

export default CheckboxGroup;
