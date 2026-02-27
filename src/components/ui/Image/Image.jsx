import clsx from 'clsx';
import styles from './Image.module.css';

function Image({ className, src, alt = '', width, height }) {
  return (
    <img
      className={clsx(styles.image, className)}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

export default Image;
