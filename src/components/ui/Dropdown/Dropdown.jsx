import clsx from 'clsx';
import styles from './Dropdown.module.css';

function Dropdown(props) {
  const {
    className,
    trigger,
    content,
    isOpen,
    onToggle,
    ref,
    isMobile = false,
    position,
  } = props;

  return (
    <div className={clsx(styles.dropdown, className)}>
      <button
        ref={ref}
        className={clsx(styles.dropdownButton, {
          [styles.isMobile]: isMobile,
        })}
        onClick={onToggle}
      >
        {trigger}
      </button>
      <div
        className={clsx(styles.dropdownContent, {
          [styles.isOpen]: isOpen,
          [styles.isMobile]: isMobile,
          [styles.left]: position === 'left',
          [styles.right]: position === 'right',
        })}
      >
        {content}
      </div>
    </div>
  );
}

export default Dropdown;
