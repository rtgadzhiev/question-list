import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Skeleton from '../Skeleton/Skeleton';
import styles from './CheckboxGroup.module.css';

function CheckboxGroup({
  legend,
  options,
  isLoading = false,
  onChange,
  isChecked,
  isShowAllButton = false,
  onClick,
  isOpen,
  skeletonCount = 3,
}) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Skeleton className={styles.skeleton} count={skeletonCount} />
        ) : (
          options?.data.map((option) => (
            <FilterCheckbox
              className={styles.checkbox}
              key={option.id}
              label={option.title}
              onChange={() => onChange(option.id)}
              checked={isChecked ? isChecked(option.id) : false}
              // imageSrc={option?.imageSrc}
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
