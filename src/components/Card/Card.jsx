import clsx from 'clsx';
import styles from './Card.module.css';

function Card({ children, isShadow = false, className }) {
  return (
    <div
      className={clsx(styles.card, className, { [styles.shadow]: isShadow })}
    >
      {children}
    </div>
  );
}

export default Card;
