import clsx from 'clsx';
import styles from './Aside.module.css';
import Card from '../Card/Card';

function Aside({ ref, children, className, isOpen }) {
  return (
    <aside
      ref={ref}
      className={clsx(styles.aside, { [styles.isOpen]: isOpen }, className)}
    >
      <Card className={styles.card}>{children}</Card>
    </aside>
  );
}

export default Aside;
