import clsx from 'clsx';
import styles from './Button.module.css';

function Button({
  children,
  className,
  onClick,
  isDisabled = false,
  type,
  ref,
}) {
  return (
    <button
      className={clsx(styles.button, className)}
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      ref={ref}
    >
      {children}
    </button>
  );
}

export default Button;
