import clsx from 'clsx';
import styles from './Card.module.css';

function Card({ children, isShadow }) {
  return (
    <div className={clsx(styles.card, { [styles.shadow]: isShadow })}>
      {children}
    </div>
  );
}

export default Card;
