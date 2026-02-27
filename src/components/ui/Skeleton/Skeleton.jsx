import clsx from 'clsx';
import styles from './Skeleton.module.css';

function Skeleton({ count = 1, className }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className={clsx(styles.skeleton, className)}></div>
      ))}
    </>
  );
}

export default Skeleton;
