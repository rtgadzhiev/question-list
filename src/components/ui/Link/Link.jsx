import clsx from 'clsx';
import styles from './Link.module.css';
import { NavLink } from 'react-router';
import { ROUTES } from '../../../constants/routes';

function Link({
  className,
  to = ROUTES.HOME,
  children,
  isActive,
  tabIndex,
  title,
  replace,
}) {
  return (
    <NavLink
      className={clsx(styles.link, { [styles.isActive]: isActive }, className)}
      to={to}
      tabIndex={tabIndex}
      title={title}
      aria-label={title}
      replace={replace}
    >
      {children}
    </NavLink>
  );
}

export default Link;
