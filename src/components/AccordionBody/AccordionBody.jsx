import clsx from 'clsx';
import styles from './AccordionBody.module.css';
import useHeightObserver from '../../helpers/hooks/useHeightObserver';

function AccordionBody({ children, isOpen }) {
  const { contentRef, height } = useHeightObserver();

  return (
    <div
      className={clsx(styles.collapse)}
      style={{
        height: isOpen ? height : '0px',
      }}
    >
      <div ref={contentRef} className={styles.body}>
        {children}
      </div>
    </div>
  );
}

export default AccordionBody;
