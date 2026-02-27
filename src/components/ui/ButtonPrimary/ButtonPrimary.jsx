import Button from '../Button/Button';
import styles from './ButtonPrimary.module.css';

function ButtonPrimary({ children }) {
  return <Button className={styles.button}>{children}</Button>;
}

export default ButtonPrimary;
