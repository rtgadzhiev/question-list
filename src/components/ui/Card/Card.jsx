import clsx from 'clsx';
import styles from './Card.module.css';

function Card({ className, children, isShadow = false }) {
  return (
    <div
      className={clsx(styles.card, { [styles.shadow]: isShadow }, className)}
    >
      {children}
    </div>
  );
}

export default Card;
