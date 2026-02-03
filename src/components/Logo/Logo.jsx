import clsx from 'clsx';
import logo from '../../assets/images/icons/yeahub-icon.svg';
import styles from './Logo.module.css';
import text from '../../assets/images/icons/yeahub-text-icon.svg';

function Logo({ className }) {
  return (
    <a className={clsx(styles.logo, className)} href="#">
      <img src={logo} alt="" width="33" height="33" />
      <img
        className={styles.logoText}
        src={text}
        alt=""
        width="99"
        height="32"
      />
    </a>
  );
}

export default Logo;
