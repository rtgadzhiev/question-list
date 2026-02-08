import Arrow from '../Arrow/Arrow';
import MetricCard from '../MetricCard/MetricCard';
import QuestionDropdown from '../QuestionDropdown/QuestionDropdown';
import arrow from '../../assets/images/icons/accordion-arrow-icon.svg';
import clsx from 'clsx';
import styles from './AccordionItem.module.css';
import { useRef } from 'react';

function AccordionItem({ item, isOpen, onToggle }) {
  const itemRef = useRef(null);

  return (
    <li className={styles.accordionItem}>
      <button
        className={clsx(styles.accordionItemButton, {
          [styles.isOpen]: isOpen,
        })}
        onClick={onToggle}
      >
        <p className={styles.accordionItemQuestion}>{item.title}</p>
        <Arrow
          className={styles.accordionItemArrow}
          isOpen={isOpen}
          arrow={arrow}
        />
      </button>
      <div
        className={clsx(styles.accordionItemCollapse, {
          [styles.isOpen]: isOpen,
        })}
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }
        }
      >
        <div ref={itemRef} className={styles.accordionItemBody}>
          <div className={styles.accordionItemProperties}>
            <div className={styles.accordionItemMetrics}>
              <MetricCard title="Рейтинг" score={item.rate} />
              <MetricCard title="Сложность" score={item.complexity} />
            </div>
            <QuestionDropdown />
          </div>
          <div dangerouslySetInnerHTML={{ __html: item.shortAnswer }}></div>
          <div>Ссылка со стрелкой</div>
        </div>
      </div>
    </li>
  );
}

export default AccordionItem;
