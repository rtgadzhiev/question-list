import AccordionItem from '../AccordionItem/AccordionItem';
import styles from './Accodrion.module.css';
import { useState } from 'react';

function Accordion({ items }) {
  const [openIds, setOpenIds] = useState(new Set());

  const toggleItem = (id) => {
    setOpenIds((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }

      return newSet;
    });
  };

  const isOpen = (id) => openIds.has(id);

  return (
    <ul className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={isOpen(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </ul>
  );
}

export default Accordion;
