import styles from './InfoGroup.module.css';

function InfoGroup({ title, children }) {
  return (
    <div className={styles.group}>
      <p className={styles.title}>{title}</p>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}

export default InfoGroup;
